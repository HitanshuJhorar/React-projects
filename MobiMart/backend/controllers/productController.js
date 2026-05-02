import mongoose from "mongoose";
import Product from "../models/Product.js";

function sanitizeProductPayload(body) {
  const { name, brand, description, type, images, variants } = body;

  return {
    name: typeof name === "string" ? name.trim() : "",
    brand: typeof brand === "string" ? brand.trim() : "",
    description:
      typeof description === "string" ? description.trim() : undefined,
    type: typeof type === "string" ? type.trim() : "",
    images: Array.isArray(images)
      ? images
          .map((image) => (typeof image === "string" ? image.trim() : image))
          .filter(Boolean)
      : [],
    variants: Array.isArray(variants)
      ? variants.map((variant) => ({
          ...variant,
          storage:
            typeof variant?.storage === "string" ? variant.storage.trim() : "",
          color:
            typeof variant?.color === "string" ? variant.color.trim() : "",
          price:
            typeof variant?.price === "string"
              ? Number(variant.price)
              : variant?.price,
        }))
      : [],
  };
}

function validateProductPayload(body, sanitized) {
  const missingRequiredFields = [];

  if (!sanitized.name) {
    missingRequiredFields.push("name");
  }

  if (!sanitized.brand) {
    missingRequiredFields.push("brand");
  }

  if (!sanitized.type) {
    missingRequiredFields.push("type");
  }

  if (!Array.isArray(body.variants)) {
    missingRequiredFields.push("variants");
  }

  if (missingRequiredFields.length > 1) {
    return "Missing required fields";
  }

  if (!sanitized.name) {
    return "Name is required";
  }

  if (!sanitized.brand) {
    return "Brand is required";
  }

  if (body.description !== undefined && !sanitized.description) {
    return "Description cannot be empty";
  }

  if (!sanitized.type) {
    return "Product type is required";
  }

  if (!["New", "Used"].includes(sanitized.type)) {
    return "Invalid product type";
  }

  if (body.images !== undefined && sanitized.images.length === 0) {
    return "At least one product image is required";
  }

  if (body.images !== undefined && sanitized.images.length !== body.images.length) {
    return "Each image must be a non-empty string";
  }

  if (!Array.isArray(body.variants) || sanitized.variants.length === 0) {
    return "At least one variant is required";
  }

  const invalidVariant = sanitized.variants.find(
    (variant) => !variant.storage || !variant.color,
  );

  if (invalidVariant) {
    return "Each variant must include storage and color";
  }

  const invalidPriceVariant = sanitized.variants.find(
    (variant) =>
      typeof variant.price !== "number" ||
      Number.isNaN(variant.price) ||
      variant.price <= 0,
  );

  if (invalidPriceVariant) {
    return "Price must be greater than 0";
  }

  return null;
}

function handleControllerError(error, res) {
  console.error(error);

  if (error.name === "ValidationError") {
    const firstError = Object.values(error.errors)[0];
    return res
      .status(400)
      .json({ message: firstError?.message || "Validation failed" });
  }

  if (error instanceof mongoose.Error.CastError) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(500).json({ message: error.message });
}

export const getProducts = async (_req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    handleControllerError(error, res);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    handleControllerError(error, res);
  }
};

export const addProduct = async (req, res) => {
  try {
    const sanitized = sanitizeProductPayload(req.body);
    const validationMessage = validateProductPayload(req.body, sanitized);

    if (validationMessage) {
      return res.status(400).json({ message: validationMessage });
    }

    const product = new Product(sanitized);
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    handleControllerError(error, res);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const sanitized = sanitizeProductPayload(req.body);
    const validationMessage = validateProductPayload(req.body, sanitized);

    if (validationMessage) {
      return res.status(400).json({ message: validationMessage });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      sanitized,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    handleControllerError(error, res);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    handleControllerError(error, res);
  }
};
