import express from "express";
import { uploadImages } from "../controllers/uploadController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, upload.array("images", 5), uploadImages);

export default router;
