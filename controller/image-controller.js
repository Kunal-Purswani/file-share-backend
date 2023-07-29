import File from "../models/file.js";
import dotenv from "dotenv";

dotenv.config();

export const uploadImage = async (req,res)=>{
    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }

    try {
        const file = await File.create(fileObj);  
        res.status(200).json({path: `${process.env.BASE_URL}/file/${file._id}`})  
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: err.message})
    }
}

export const downloadImage = async (req,res)=>{
    try {
        const file = await File.findById(req.params.id)
        file.downloadContent++;
        await file.save();
        res.download(file.path,file.name);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: err.message})
    }
}