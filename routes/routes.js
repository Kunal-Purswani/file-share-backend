import express from "express";
import { uploadImage, downloadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.get("/file/:id", downloadImage)

router.post("/upload",upload.single('file'), uploadImage);

export default router;