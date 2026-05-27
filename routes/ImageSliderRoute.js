git push origin main
// import express from "express";
// import {
//   createImage,
//   getAllImages,
//   getSingleImage,
//   updateImage,
//   deleteImage,
// } from "../controllers/ImageSlider.js";
// import upload from "../middleware/Upload.js";

// const router = express.Router();

// router.post("/createImage", upload.single("image"), createImage);
// router.get("/", getAllImages);
// router.get("/:id", getSingleImage);
// router.put("/:id", upload.single("image"), updateImage);
// router.delete("/:id", deleteImage);

// export default router;

import express from "express";
import upload from "../middleware/upload.js";
import {
  createMedia,
  getAllMedia,
  getSingleMedia,
  updateMedia,
  deleteMedia,
} from "../controllers/ImageSlider.js";

const router = express.Router();

router.post("/", upload.single("file"), createMedia);
router.get("/", getAllMedia);
router.get("/:id", getSingleMedia);
router.put("/:id", upload.single("file"), updateMedia);
router.delete("/:id", deleteMedia);

export default router;