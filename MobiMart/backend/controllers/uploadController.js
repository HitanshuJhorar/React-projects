import cloudinary from "../config/cloudinary.js";

function uploadBuffer(fileBuffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      },
    );

    stream.end(fileBuffer);
  });
}

export const uploadImages = async (req, res) => {
  try {
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return res.status(500).json({
        message: "Cloudinary is not configured",
      });
    }

    if (!Array.isArray(req.files) || req.files.length === 0) {
      return res.status(400).json({ message: "At least one image is required" });
    }

    const uploadedImages = await Promise.all(
      req.files.map((file) => uploadBuffer(file.buffer, "mobimart/products")),
    );

    res.status(201).json({
      urls: uploadedImages.map((image) => image.secure_url),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload images" });
  }
};
