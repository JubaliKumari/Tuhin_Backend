import Portrait from "../models/Portrait.js";

// ✅ Create Portrait (Single Image)
export const createPortrait = async (req, res) => {
  try {
    const { heading, description } = req.body;

    if (!heading || heading.trim() === "") {
      return res.status(400).json({ error: "Heading is required" });
    }

    if (!description || description.trim() === "") {
      return res.status(400).json({ error: "Description is required" });
    }

    // ✅ single file check
    if (!req.file) {
      return res.status(400).json({ error: "Please upload one image" });
    }

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const newPortrait = new Portrait({
      heading: heading.trim(),
      description: description.trim(),
      images: [imageUrl], // keep array
    });

    await newPortrait.save();

    res.status(201).json({
      message: "Portrait created successfully ✅",
      data: newPortrait,
    });
  } catch (error) {
    console.error("Create Portrait Error:", error);
    res.status(500).json({
      error: "Failed to create portrait",
      details: error.message,
    });
  }
};

// Get All & Delete remain the same
export const getAllPortraits = async (req, res) => {
  try {
    const data = await Portrait.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePortrait = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Portrait.findByIdAndDelete(id);
    
    if (!deleted) return res.status(404).json({ error: "Portrait not found" });

    res.status(200).json({ message: "Portrait deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};