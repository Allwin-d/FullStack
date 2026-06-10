import multer from "multer";
import { Request, Response } from "express";
import uploadToCloudinary from "../cloudinaryHelper/CloudinaryHelper.js";
import Image from "../models/ImageModel.js";
import type { userInfoType } from "../middleware/adminMiddleware.js";

const imageController = async (req: Request, res: Response) => {
  try {
    if (!req.file?.path) {
      //checks if the file exist or not
      return res.status(400).json({
        success: false,
        message: "File is Required",
      });
    }
    const { url, publicId } = await uploadToCloudinary(req.file.path); //uploads our image to the cloud
    const uploadImage = await Image.create({
      url,
      publicId,
      uploadedBy: (req.user as userInfoType).userId,
    }); //stores the image in the mongo DB

    res.status(201).json({
      success: true,
      message: "Image Uploaded Successfully",
      data: uploadImage,
    });
  } catch (err) {
    res.status(500).json("Upload Failed");
  }
};

export default imageController;
