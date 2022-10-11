const cloudinary = require("../middleware/cloudinary");
const ProfilePost = require("../models/ProfilePost");
const User = require("../models/User");
const { postLogin } = require("./auth");
const e = require("express");

module.exports = {

updateProfilePost: async (req, res) => {
    // try {
      console.log(req.file)
      console.log(req.params);
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        
            let chosenProfilePost = await ProfilePost.findOne(
              {_id: req.params.id, user: req.body.user });
              console.log(chosenProfilePost);
            if (chosenProfilePost){
              await ProfilePost.findOneAndUpdate(
                { _id: req.params.id },
                {
                  $inc: { cloudinaryId: result.public_id },
                  $inc: { image: result.secure_url } 
                }
              );
              console.log("updated profile");
              //back to the relevant post where the Review is shown
              res.json({cloudinaryId: result.public_id, image: result.secure_url})
            } else { await Post.create({
                image: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.body.id,
              });
              console.log("created profile pic");
              res.json({cloudinaryId: result.public_id, image: result.secure_url})
            } 
          //  } catch (err) {
          //     console.log(err);
          //   }
          },

          deleteProfilePost: async (req, res) => {
            try {
              console.log(req.body);
              // Find post by id - the following checks that it exists
              let chosenProfilePost = await ProfilePost.findById({ _id: req.body._id });
              // Delete image from cloudinary
              await cloudinary.uploader.destroy(post.cloudinaryId);
              // Delete post from db
              await chosenProfilePost.deleteOne({ _id: req.body._id });
              console.log("Deleted Review");
              res.json("Deleted Review");
            } catch (err) {
              res.json("error");
            }
          },    
          getProfilePost: async (req,res)=>{
            // console.log(req.params);
            try{
                let chosenProfilePost = await ProfilePost.findById({ _id: req.params.id });
                if(chosenProfilePost){
                    res.json(chosenProfilePost) 
                }
                else{
                    res.json('no profile image')
                }
            }catch(err){
                console.log(err)
            }
        }
}