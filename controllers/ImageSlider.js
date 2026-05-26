// // import ImageSlider from "../models/ImageSlider.js";
// // import fs from "fs";

// // // 📤 CREATE
// // export const createImage = async (req, res) => {
// //   try {
// //     const { heading, description } = req.body;

// //     if (!heading?.trim() || !description?.trim() || !req.file) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "All fields are required",
// //       });
// //     }

// //     const newImage = await ImageSlider.create({
// //       heading: heading.trim(),
// //       description: description.trim(),
// //       image: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Image created successfully",
// //       data: newImage,
// //     });
// //   } catch (error) {
// //   console.error("UPLOAD ERROR:", error); // 👈 add this
// //   res.status(500).json({
// //     success: false,
// //     message: error.message,
// //   });
// // }
// // };

// // // 📋 GET ALL
// // export const getAllImages = async (req, res) => {
// //   try {
// //     const images = await ImageSlider.find().sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: images.length,
// //       data: images,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // // 🔍 GET SINGLE
// // export const getSingleImage = async (req, res) => {
// //   try {
// //     const image = await ImageSlider.findById(req.params.id);

// //     if (!image) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Image not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       data: image,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // // ✏️ UPDATE
// // export const updateImage = async (req, res) => {
// //   try {
// //     const imageDoc = await ImageSlider.findById(req.params.id);

// //     if (!imageDoc) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Image not found",
// //       });
// //     }

// //     const { heading, description } = req.body;

// //     if (heading) imageDoc.heading = heading.trim();
// //     if (description) imageDoc.description = description.trim();

// //     if (req.file) {
// //       try {
// //         const oldFile = imageDoc.image.split("/uploads/")[1];
// //         fs.unlinkSync(`uploads/${oldFile}`);
// //       } catch (err) {
// //         console.log("Old image delete failed");
// //       }

// //       imageDoc.image = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
// //     }

// //     await imageDoc.save();

// //     res.status(200).json({
// //       success: true,
// //       message: "Updated successfully",
// //       data: imageDoc,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// // // ❌ DELETE
// // export const deleteImage = async (req, res) => {
// //   try {
// //     const image = await ImageSlider.findById(req.params.id);

// //     if (!image) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Image not found",
// //       });
// //     }

// //     try {
// //       const oldFile = image.image.split("/uploads/")[1];
// //       fs.unlinkSync(`uploads/${oldFile}`);
// //     } catch (err) {
// //       console.log("Delete file error");
// //     }

// //     await image.deleteOne();

// //     res.status(200).json({
// //       success: true,
// //       message: "Deleted successfully",
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// import ImageSlider from "../models/ImageSlider.js";
// import fs from "fs";

// // 📤 CREATE (Image or Video)
// export const createMedia = async (req, res) => {
//   try {
//     const { heading, description } = req.body;

//     if (!heading?.trim() || !description?.trim() || !req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const type = req.file.mimetype.startsWith("video/")
//       ? "video"
//       : "image";

//     const mediaUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

//     const newMedia = await ImageSlider.create({
//       heading: heading.trim(),
//       description: description.trim(),
//       media: mediaUrl,
//       type,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Media uploaded successfully",
//       data: newMedia,
//     });
//   } catch (error) {
//     console.error("UPLOAD ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 📋 GET ALL
// export const getAllMedia = async (req, res) => {
//   try {
//     const media = await ImageSlider.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: media.length,
//       data: media,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // 🔍 GET SINGLE
// export const getSingleMedia = async (req, res) => {
//   try {
//     const media = await ImageSlider.findById(req.params.id);

//     if (!media) {
//       return res.status(404).json({
//         success: false,
//         message: "Media not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: media,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ✏️ UPDATE
// export const updateMedia = async (req, res) => {
//   try {
//     const mediaDoc = await ImageSlider.findById(req.params.id);

//     if (!mediaDoc) {
//       return res.status(404).json({
//         success: false,
//         message: "Media not found",
//       });
//     }

//     const { heading, description } = req.body;

//     if (heading) mediaDoc.heading = heading.trim();
//     if (description) mediaDoc.description = description.trim();

//     if (req.file) {
//       // delete old file
//       try {
//         const oldFile = mediaDoc.media.split("/uploads/")[1];
//         fs.unlinkSync(`uploads/${oldFile}`);
//       } catch (err) {
//         console.log("Old file delete failed");
//       }

//       const type = req.file.mimetype.startsWith("video/")
//         ? "video"
//         : "image";

//       mediaDoc.media = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
//       mediaDoc.type = type;
//     }

//     await mediaDoc.save();

//     res.status(200).json({
//       success: true,
//       message: "Updated successfully",
//       data: mediaDoc,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ❌ DELETE
// export const deleteMedia = async (req, res) => {
//   try {
//     const media = await ImageSlider.findById(req.params.id);

//     if (!media) {
//       return res.status(404).json({
//         success: false,
//         message: "Media not found",
//       });
//     }

//     try {
//       const oldFile = media.media.split("/uploads/")[1];
//       fs.unlinkSync(`uploads/${oldFile}`);
//     } catch (err) {
//       console.log("Delete file error");
//     }

//     await media.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import ImageSlider from "../models/ImageSlider.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

// Upload helper
// const uploadToCloudinary = (fileBuffer) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       {
//         folder: "media",
//         resource_type: "auto",
//       },
//       (error, result) => {
//         if (error) reject(error);
//         else resolve(result);
//       }
//     );

//     streamifier.createReadStream(fileBuffer).pipe(stream);
//   });
// };

// CREATE

const uploadToCloudinary = async (
  fileBuffer,
  mimetype
) => {
  return new Promise((resolve, reject) => {
    const resourceType =
      mimetype.startsWith("video/")
        ? "video"
        : "image";

    const stream =
      cloudinary.uploader.upload_stream(
        {
          folder: "media",
          resource_type:
            resourceType,
          timeout: 120000, // 2 min
        },
        (error, result) => {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

    streamifier
      .createReadStream(fileBuffer)
      .pipe(stream);
  });
};
// export const createMedia = async (req, res) => {
//   try {
//     const { heading, description } = req.body;

//     if (!heading || !description || !req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields required",
//       });
//     }

// const uploadResult =
//   await uploadToCloudinary(
//     req.file.buffer,
//     req.file.mimetype
//   );
//     const type = req.file.mimetype.startsWith(
//       "video/"
//     )
//       ? "video"
//       : "image";

//     const media = await ImageSlider.create({
//       heading,
//       description,
//       media: uploadResult.secure_url,
//       public_id: uploadResult.public_id,
//       type,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Uploaded Successfully",
//       data: media,
//     });
//     res.status(500).json({
//   success: true,
//   uploadResult,
// });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



// GET ALL

export const createMedia = async (
  req,
  res
) => {
  try {
    const { heading, description } =
      req.body;

    if (
      !heading ||
      !description ||
      !req.file
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields required",
      });
    }

    const uploadResult =
      await uploadToCloudinary(
        req.file.buffer,
        req.file.mimetype
      );

    console.log(uploadResult);

    const type =
      req.file.mimetype.startsWith(
        "video/"
      )
        ? "video"
        : "image";

    const media =
      await ImageSlider.create({
        heading,
        description,
        media:
          uploadResult.secure_url,
        public_id:
          uploadResult.public_id,
        type,
      });

    return res.status(201).json({
      success: true,
      message:
        "Uploaded Successfully",
      data: media,
      cloudinary_url:
        uploadResult.secure_url,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllMedia = async (
  req,
  res
) => {
  try {
    const media =
      await ImageSlider.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data: media,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
export const updateMedia = async (
  req,
  res
) => {
  try {
    const mediaDoc =
      await ImageSlider.findById(
        req.params.id
      );

    if (!mediaDoc) {
      return res.status(404).json({
        success: false,
        message: "Media not found",
      });
    }

    const { heading, description } =
      req.body;

    if (heading)
      mediaDoc.heading = heading;

    if (description)
      mediaDoc.description =
        description;

    if (req.file) {
      // delete old cloudinary file
      if (mediaDoc.public_id) {
        await cloudinary.uploader.destroy(
          mediaDoc.public_id,
          {
            resource_type:
              mediaDoc.type === "video"
                ? "video"
                : "image",
          }
        );
      }

      const uploadResult =
       await uploadToCloudinary(
  req.file.buffer,
  req.file.mimetype
);

      mediaDoc.media =
        uploadResult.secure_url;
      mediaDoc.public_id =
        uploadResult.public_id;

      mediaDoc.type =
        req.file.mimetype.startsWith(
          "video/"
        )
          ? "video"
          : "image";
    }

    await mediaDoc.save();

    res.status(200).json({
      success: true,
      message: "Updated Successfully",
      data: mediaDoc,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
export const deleteMedia = async (
  req,
  res
) => {
  try {
    const media =
      await ImageSlider.findById(
        req.params.id
      );

    if (!media) {
      return res.status(404).json({
        success: false,
        message: "Media not found",
      });
    }

    if (media.public_id) {
      await cloudinary.uploader.destroy(
        media.public_id,
        {
          resource_type:
            media.type === "video"
              ? "video"
              : "image",
        }
      );
    }

    await media.deleteOne();

    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleMedia = async (
  req,
  res
) => {
  try {
    const media =
      await ImageSlider.findById(
        req.params.id
      );

    if (!media) {
      return res.status(404).json({
        success: false,
        message: "Media not found",
      });
    }

    res.status(200).json({
      success: true,
      data: media,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};