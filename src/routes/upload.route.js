import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { uploadSingle } from "../middleware/multer.js";
import { Cloudinary, CLOUDINARY_API } from "../api/cloudinary.js";

const router = Router();

router.post(
  "/upload",
  uploadSingle("image"),
  expressAsyncHandler(async (req, res) => {
    // single file upload
    const imgRes = await Cloudinary.upload(
      req.file,
      CLOUDINARY_API.folder.projects
    );
    // multiple images
    // const imgRes = await Promise.all(req.files.map(file=>await Cloudinary.upload(
    //   file,
    //   CLOUDINARY_API.folder.projects
    // )));
    res.status(200).json(imgRes);
  })
);

export { router as UploadRouter };
