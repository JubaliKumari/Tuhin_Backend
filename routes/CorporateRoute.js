import express from "express";
import multer from "multer";

import {
  createCorporate,
  getAllCorporate,
  deleteCorporate,
} from "../controllers/corporateController.js";

const router = express.Router();

/* Multer Setup */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({ storage });

/* Routes */
router.post(
  "/createCorporate",
  upload.single("image"), // ✅ SAME AS TRAVELLING
  createCorporate
);

router.get("/", getAllCorporate);
router.delete("/:id", deleteCorporate);

export default router;