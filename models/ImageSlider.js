// import mongoose from "mongoose";

// const ImageSliderSchema = new mongoose.Schema(
//   {
//     heading: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const ImageSlider = mongoose.model("ImageSlider", ImageSliderSchema);

// export default ImageSlider;

import mongoose from "mongoose";

const ImageSliderSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    media: {
      type: String, // image or video URL
      required: true,
    },
    type: {
      type: String, // "image" or "video"
      enum: ["image", "video"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ImageSlider", ImageSliderSchema);