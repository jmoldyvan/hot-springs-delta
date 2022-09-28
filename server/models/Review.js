const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  usersWhoLiked: [mongoose.Schema.Types.ObjectId],
  hotSpring: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HotSpringInfo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("reviews", ReviewSchema, "reviews");