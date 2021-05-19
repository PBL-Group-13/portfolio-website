import * as cloudinary from "cloudinary";
import streamifier from "streamifier";
export const CLOUDINARY_API = {
  config: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  folder: {
    projects: "portfolio/products",
  },
};

cloudinary.v2.config(CLOUDINARY_API.config);

export const Cloudinary = {
  upload: async (req, folder = "/") => {
    const fileName = req.originalname.replace(/\..+$/, "");
    console.log(fileName);
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: `${folder}`,
          public_id: fileName,
        },
        (err, img) => {
          if (img) {
            resolve(img);
          } else {
            reject(err);
          }
        }
      );

      streamifier.createReadStream(req.buffer).pipe(uploadStream);
    });
  },
};
