const Review = require("../models/Review");
const User = require("../models/User");

module.exports = {
  createReview: async (req, res) => {
    try {
      await Review.create({
        title: req.body.title,
        review: req.body.review,
        likes: 0,
        hotSpring: req.body.id,
        user: req.body.user,
        userName: req.body.userName,
        image: req.body.image,
      });
      console.log("Review has been added!");
      res.json({Review}); 
    } catch (err) {
      console.log(err);
    }
  },
  addLike: async (req,res)=>{
  //like Review from specific post view
    try {
      //check if userid is in the array for that post, = already liked it
      let chosenReview = await Review.findOne(
        {_id: req.params.id, usersWhoLiked: req.user._id });
      if (chosenReview){
        await Review.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likes: -1 },
            $pullAll: { 'usersWhoLiked': [req.user.id] } 
          }
        );
        console.log("Review Likes-1 and user from array");
        //back to the relevant post where the Review is shown
        res.json({msg: "Review Likes-1 and user from array"})
      } else {
        const addLikeReview = await Review.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { likes: 1 },
            $addToSet: { 'usersWhoLiked': req.user.id } 
          }
        );
        console.log("Likes +1");
      //back to the relevant post where the Review is shown
      res.json({msg: addLikeReview}); 
      }
      
    } catch (err) {
      console.log(err);
    }
  
  },
  deleteReview: async (req, res) => {
    try {
      console.log(req.body);
      // Find post by id - the following checks that it exists
      let chosenReview = await Review.findById({ _id: req.body._id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await chosenReview.deleteOne({ _id: req.body._id });
      console.log("Deleted Review");
      res.json("Deleted Review");
    } catch (err) {
      res.json("error");
    }
  },    
  getReviews: async (req,res)=>{
    try{
        const allReviewsInfo = await Review.find({})
        console.log(allReviewsInfo)  
        return res.json(allReviewsInfo)          
    }catch(err){
        console.log(err)
    }
},
  // getReview: async (req, res) => {
  //   try {
  //     const review = await Review.findById(req.params.id);
  //     const author = await User.findById(review.user);
  //     const comments = await Comment.find({review: req.params.id}).sort({ createdAt: "desc" })
  //     // .lean();
  //     //got rid of lean again bc I need the likedByViewer logic to work

  //     //prob not the most efficient approach
  //     //essentially tacking on the username outside the db
  //     //including likes
  //     for (const comment of comments){
  //       const writer = await User.findById(comment.user);
  //       comment.writer = writer.userName;
  //       if (comment.usersWhoLiked.includes(req.user.id)){
  //         comment.likedByViewer = true;
  //       }
  //     }
};