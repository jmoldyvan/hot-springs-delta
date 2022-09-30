const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/createReview/:id", reviewController.createReview);
router.get('/reviewInfo', reviewController.getReviews)
router.put("/likeReview/:id", reviewController.addLike)

router.delete("/deleteReview/:id", reviewController.deleteReview);

module.exports = router;