const mongoose = require("mongoose");

const ProfilePostSchema = new mongoose.Schema({
  cloudinaryId: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("profileposts", ProfilePostSchema, "profileposts");