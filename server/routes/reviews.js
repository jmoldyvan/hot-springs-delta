const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//review Routes - simplified for now
router.post("/createReview/:id", reviewController.createReview);
router.get('/reviewInfo', reviewController.getReviews)
//ui missing
router.put("/likeReview/:id", reviewController.addLike)

router.delete("/deleteReview/:id", reviewController.deleteReview);

module.exports = router;