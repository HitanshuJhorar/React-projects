import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiUpload, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useProducts } from "../context/useProducts";
import CustomDropdown from "../../components/ui/CustomDropdown";
import Spinner from "../../components/ui/Spinner";
import StatusMessage from "../../components/ui/StatusMessage";
import { uploadProductImages } from "../../services/productAPI";

const initialForm = {
  name: "",
  brand: "",
  type: "New",
  description: "",
};

const conditionOptions = [
  { label: "New", value: "New" },
  { label: "Used", value: "Used" },
];

const storageOptions = [
  { label: "Select Storage", value: "" },
  { label: "64GB", value: "64GB" },
  { label: "128GB", value: "128GB" },
  { label: "256GB", value: "256GB" },
  { label: "512GB", value: "512GB" },
  { label: "1TB", value: "1TB" },
];

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const [form, setForm] = useState(initialForm);
  const [variants, setVariants] = useState([{ storage: "", color: "", price: "" }]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    return () => {
      imagesRef.current.forEach((image) => {
        URL.revokeObjectURL(image.previewUrl);
      });
    };
  }, []);

  const addVariant = () => {
    setVariants([...variants, { storage: "", color: "", price: "" }]);
  };

  const removeVariant = (index) => {
    const updated = variants.filter((_, currentIndex) => currentIndex !== index);
    setVariants(updated);
  };

  const updateVariant = (index, field, value) => {
    const updated = [...variants];
    updated[index][field] = value;
    setVariants(updated);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.brand.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    if (variants.length === 0) {
      setError("At least 1 variant is required.");
      return;
    }

    for (let i = 0; i < variants.length; i += 1) {
      const variant = variants[i];
      if (!variant.storage || !variant.color.trim() || !variant.price) {
        setError(`Please fill all fields for variant ${i + 1}.`);
        return;
      }
      if (Number(variant.price) <= 0) {
        setError(`Price must be greater than 0 for variant ${i + 1}.`);
        return;
      }
    }

    try {
      setIsSubmitting(true);
      setError("");
      setSuccess("");

      const uploadedImageUrls =
        images.length > 0
          ? await uploadProductImages(images.map((image) => image.file))
          : [];

      await addProduct({
        name: form.name.trim(),
        brand: form.brand.trim(),
        type: form.type,
        description: form.description.trim(),
        images: uploadedImageUrls,
        variants: variants.map((variant) => ({
          ...variant,
          price: Number(variant.price),
        })),
      });

      setSuccess("Product saved successfully. Redirecting...");
      navigate("/admin/products");
    } catch (submitError) {
      setError(submitError.response?.data?.message || "Failed to save product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onImagesSelected = (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    const invalid = files.some((file) => !file.type.startsWith("image/"));
    if (invalid) {
      setError("Only image files are allowed.");
      return;
    }

    if (images.length + files.length > 5) {
      setError("You can upload a maximum of 5 images.");
      return;
    }

    const nextImages = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...nextImages]);
    setError("");
    setSuccess(`${files.length} image${files.length > 1 ? "s" : ""} ready to upload.`);
    event.target.value = "";
  };

  const removeImage = (indexToRemove) => {
    setImages((prev) => {
      const imageToRemove = prev[indexToRemove];
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.previewUrl);
      }

      return prev.filter((_, index) => index !== indexToRemove);
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Sidebar />
      <main className="p-4 sm:p-6 lg:ml-[260px] lg:p-8">
        <Topbar />
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <h1 className="text-3xl font-semibold text-slate-900">Add Product</h1>
          <p className="mb-6 text-slate-500">Create a new product entry for inventory.</p>
          <StatusMessage message={error} tone="error" className="mb-3" />
          <StatusMessage message={success} tone="success" className="mb-3" />

          <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Name", name: "name", type: "text", placeholder: "iPhone 15 Pro Max" },
                { label: "Brand", name: "brand", type: "text", placeholder: "Apple" },
              ].map((field) => (
                <label key={field.name} className={field.full ? "md:col-span-2" : ""}>
                  <span className="mb-1 block text-sm font-medium text-slate-700">{field.label}</span>
                  <input
                    required
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={(changeEvent) => {
                      onChange(changeEvent);
                      setError("");
                    }}
                    placeholder={field.placeholder}
                    className="mm-input"
                  />
                </label>
              ))}

              <div>
                <span className="mb-1 block text-sm font-medium text-slate-700">Condition</span>
                <div className="flex items-center gap-3">
                  {conditionOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setForm((prev) => ({ ...prev, type: opt.value }));
                        setError("");
                      }}
                      className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        form.type === opt.value
                          ? "bg-primary text-white shadow-sm"
                          : "bg-gray-100 text-dark hover:bg-gray-200"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="md:col-span-2">
                <span className="mb-1 block text-sm font-medium text-slate-700">Description</span>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={(changeEvent) => {
                    onChange(changeEvent);
                    setError("");
                  }}
                  rows={4}
                  maxLength={500}
                  placeholder="Briefly describe key features, condition, and other details..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-emerald-300"
                />
                <p className="mt-1 text-right text-xs text-slate-400">{form.description.length}/500</p>
              </label>

              <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">Product Variants</p>
                    <p className="text-sm text-slate-500">Add storage, color, and price variations.</p>
                  </div>
                  <button
                    type="button"
                    onClick={addVariant}
                    className="ds-btn-secondary py-1.5 text-xs px-3"
                  >
                    + Add Variant
                  </button>
                </div>

                <div className="grid gap-4">
                  {variants.map((variant, index) => (
                    <div
                      key={index}
                      className="relative grid gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-3"
                    >
                      <div>
                        <span className="mb-1 block text-sm font-medium text-slate-700">Storage</span>
                        <CustomDropdown
                          value={variant.storage}
                          onChange={(value) => {
                            updateVariant(index, "storage", value);
                            setError("");
                          }}
                          options={storageOptions}
                        />
                      </div>

                      <label>
                        <span className="mb-1 block text-sm font-medium text-slate-700">Color</span>
                        <input
                          type="text"
                          placeholder="e.g., Space Black"
                          value={variant.color}
                          onChange={(changeEvent) => {
                            updateVariant(index, "color", changeEvent.target.value);
                            setError("");
                          }}
                          className="mm-input py-2.5"
                        />
                      </label>

                      <label>
                        <span className="mb-1 block text-sm font-medium text-slate-700">Price</span>
                        <input
                          type="number"
                          placeholder="Price"
                          value={variant.price}
                          onChange={(changeEvent) => {
                            updateVariant(index, "price", changeEvent.target.value);
                            setError("");
                          }}
                          className="mm-input py-2.5"
                        />
                      </label>

                      {variants.length > 1 ? (
                        <button
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600 transition hover:bg-rose-200 shadow-sm"
                          title="Remove Variant"
                        >
                          <FiX className="text-sm" />
                        </button>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <p className="text-lg font-semibold text-slate-900">Product Images</p>
              <p className="mb-4 text-sm text-slate-500">
                Upload up to 5 images. They will be stored in Cloudinary before the product is saved.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={onImagesSelected}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mb-4 flex h-40 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-slate-500 transition hover:border-emerald-400 hover:text-emerald-600"
              >
                <FiUpload className="mb-2 text-2xl" />
                <span className="font-medium">Drag & drop images here</span>
                <span className="text-sm">or click to browse files</span>
              </button>

              <div className="grid grid-cols-3 gap-3">
                <AnimatePresence>
                  {images.map((image, index) => (
                    <motion.div
                      key={image.previewUrl}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white"
                    >
                      <img
                        src={image.previewUrl}
                        alt={`Product preview ${index + 1}`}
                        className="h-24 w-full object-cover transition duration-200 group-hover:scale-105"
                      />
                      {index === 0 ? (
                        <span className="absolute left-1.5 top-1.5 rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                          MAIN
                        </span>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-1.5 top-1.5 rounded-full bg-black/60 p-1 text-white"
                      >
                        <FiX className="text-xs" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {Array.from({ length: Math.max(0, 5 - images.length) }).map((_, index) => (
                  <button
                    key={`slot-${index}`}
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-xl text-slate-400 hover:border-emerald-400 hover:text-emerald-500"
                  >
                    +
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="ds-btn-primary w-auto px-8 py-3 shadow-sm text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Spinner size="sm" label="" className="gap-2 text-white" />
                    <span>Uploading & Saving...</span>
                  </>
                ) : (
                  "Save Product"
                )}
              </motion.button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
