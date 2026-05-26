const cloudinary = require("./config/cloudinary");

cloudinary.api
  .ping()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));