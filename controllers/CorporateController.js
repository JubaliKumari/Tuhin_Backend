import Corporate from "../models/Corporate.js";

/* ✅ Create Corporate */
export const createCorporate = async (req, res) => {
  try {
    const { heading, description } = req.body;

    if (!heading || !description) {
      return res.status(400).json({
        error: "Heading and Description are required",
      });
    }

    // ✅ FIX HERE
    if (!req.file) {
      return res.status(400).json({
        error: "Please upload an image",
      });
    }

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const newCorporate = new Corporate({
      heading,
      description,
      images: [imageUrl], // keep array in DB
    });

    await newCorporate.save();

    res.status(201).json({
      message: "Corporate created successfully ✅",
      data: newCorporate,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ✅ Get All Corporate */
export const getAllCorporate = async (req, res) => {
  try {
    const data = await Corporate.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ✅ Delete Corporate */
export const deleteCorporate = async (req, res) => {
  try {
    const { id } = req.params;

    await Corporate.findByIdAndDelete(id);

    res.json({ message: "Deleted successfully ❌" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};