import fs from "fs/promises";
import cloudinary from "../config/cloudinary.js";
import { buildOptimizedCloudinaryUrl } from "../utils/cloudinaryImage.js";
import { collectUploadedFiles, MAX_IMAGE_UPLOADS } from "../middleware/upload.js";

async function uploadSingleImage(file) {
  const uploadedImage = await cloudinary.uploader.upload(file.path, {
    folder: "mobimart/products",
    resource_type: "image",
    use_filename: true,
    unique_filename: true,
    transformation: [
      {
        width: 800,
        crop: "limit",
        quality: "auto",
        fetch_format: "auto",
      },
    ],
  });

  return buildOptimizedCloudinaryUrl(uploadedImage.secure_url, "product");
}

export const uploadImages = async (req, res) => {
  const localFiles = collectUploadedFiles(req.files);

  try {
    if (localFiles.length === 0) {
      return res.status(400).json({ message: "At least one image is required" });
    }

    if (localFiles.length > MAX_IMAGE_UPLOADS) {
      return res.status(400).json({ message: `You can upload up to ${MAX_IMAGE_UPLOADS} images` });
    }

    const urls = await Promise.all(localFiles.map((file) => uploadSingleImage(file)));

    return res.status(201).json({
      urls,
      url: urls[0] || null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to upload images to Cloudinary" });
  } finally {
    await Promise.all(localFiles.map((file) => fs.unlink(file.path).catch(() => {})));
  }
};
