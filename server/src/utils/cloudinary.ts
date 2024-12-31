import { v2 as cloudinary } from "cloudinary";
import { NextFunction, Response } from "express";

cloudinary.config({
  cloud_name: "dhjfewnni",
  api_key: "654114423325382",
  api_secret: "y-rod5kZa_0PO-DIvEh8yK53sk8",
});

const upload = async (
  file_path: string,
  next: NextFunction,
  folder: string = "avatars",
  type: "image" | "video" | "raw" | "auto" | undefined = "image"
) => {
  return await cloudinary.uploader.upload(
    file_path,
    {
      folder,
      resource_type: type,
    },
    (err) => {
      if (err) {
        console.log("upload faild", err.message);
      }
    }
  );
};

export default upload;
