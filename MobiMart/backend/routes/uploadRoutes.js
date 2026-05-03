import express from "express";
import multer from "multer";
import { uploadImages } from "../controllers/uploadController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  cleanupUploadedFiles,
  MAX_IMAGE_UPLOADS,
} from "../middleware/upload.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", authMiddleware, (req, res, next) => {
  upload.fields([
    { name: "images", maxCount: MAX_IMAGE_UPLOADS },
    { name: "image", maxCount: 1 },
  ])(req, res, async (error) => {
    if (!error) {
      next();
      return;
    }

    await cleanupUploadedFiles(req.files);

    if (error instanceof multer.MulterError && error.code === "LIMIT_FILE_SIZE") {
      res.status(413).json({ message: "Each image must be 5 MB or smaller" });
      return;
    }

    if (error instanceof multer.MulterError && error.code === "LIMIT_UNEXPECTED_FILE") {
      res.status(400).json({ message: `You can upload up to ${MAX_IMAGE_UPLOADS} images at once` });
      return;
    }

    res.status(400).json({ message: error.message || "Failed to process images" });
  });
}, uploadImages);

export default router;
