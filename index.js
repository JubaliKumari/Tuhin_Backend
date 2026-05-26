import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors"; 

import db from "./config/db.js";
import EventRoute from "./routes/EventRoute.js";
import ImageRoutes from "./routes/ImageRoutes.js";
import AboutRoute from "./routes/AboutRoute.js"; // Fixed spelling typo from 'AnoutRoute'
import userRoutes from "./routes/userRoutes.js";
import ImageSliderRoutes from "./routes/ImageSliderRoute.js";
import ProductRoutes from "./routes/ProductRotues.js";
import LifestyleRoutes from "./routes/LifestyleRoutes.js";
import PortraitRoutes from "./routes/PortraitRoutes.js";
import TravellingRoute from "./routes/TravellingRoute.js";
import CorporateRoute from "./routes/CorporateRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

// ✅ UPDATED FOR PRODUCTION: Allows local development AND your live domains
app.use(cors({
  origin: [
    "http://localhost:3000", 
    "http://localhost:5173",
    "https://snowman18studio.com",
    "https://www.snowman18studio.com",
    /\.vercel\.app$/ // This allows all your preview deployments on Vercel to connect!
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Static folder (Temporary until you plug in Cloudinary)
app.use("/uploads", express.static("uploads"));

// ✅ Routes
app.use("/api/events", EventRoute);
app.use("/api/imageRoutes", ImageRoutes);
app.use("/api/about", AboutRoute);
app.use("/api/users", userRoutes);
app.use("/api/imageSlider", ImageSliderRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/lifestyle", LifestyleRoutes);
app.use("/api/portrait", PortraitRoutes);
app.use("/api/travelling", TravellingRoute);
app.use("/api/corporate", CorporateRoute);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API Running smoothly in production mode! 🚀");
});

// ✅ Start server
db()
  .then(() => {
    app.listen(PORT, () => {
      // Dynamically logs the right URI instead of forcing 'localhost' printouts in cloud logs
      console.log(`Server successfully engaged and running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });