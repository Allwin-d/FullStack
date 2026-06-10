import cloudinary from "../config/CloudinaryConfig.js";
const uploadToCloudinary = async (filepath: string): Promise<any> => {
  try {
    const result = await cloudinary.v2.uploader.upload(filepath);

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Error uploading image to Cloud");
    throw new Error("Error uploading image to Cloud");
  }
};

export default uploadToCloudinary;
