const HotSpring = require('../models/HotSpringInfo')
const User = require("../models/User");


module.exports = {
    getHSDBInfo: async (req,res)=>{
                try{
                    const allHotSpringsInfo = await HotSpring.find({})
                    console.log(allHotSpringsInfo)  
                    return res.json(allHotSpringsInfo)          
                }catch(err){
                    console.log(err)
                }
    },
    findNearest: async (req,res)=>{
        try{
            console.log('POST GOT');
            const {  lng, lat } = req.body
            console.log('POST GOT');
            results = await HotSpring.find({
                loc: {
                    $near:{
                    $geometry: {type: "Point", coordinates: [ lng, lat ],},
                    // 500mi = 804672meter  150mi = 241402meter 50mi = 80467.2 10mi=1609.34 5=8046.72
                    $maxDistance: 804672}
                }
                })
                res.json(results)          
    }
    catch(err){
        console.log(err)
    }
},
addLike: async (req,res)=>{
  console.log(req.body)
    //like Review from specific post view
      try {
        //check if userid is in the array for that post, = already liked it
        let chosenHotSpring = await HotSpring.findOne(
          {_id: req.params.id, usersWhoLiked: req.body.user });
          console.log(chosenHotSpring);
        if (chosenHotSpring){
          await HotSpring.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { likes: -1 },
              $pullAll: { 'usersWhoLiked': [req.body.user] } 
            }
          );
          console.log("HotSpring Likes-1 and user from array");
          //back to the relevant post where the Review is shown
          res.json({msg: "HotSpring Likes-1 and user from array"})
        } else {
          const addLikeHotSpring = await HotSpring.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { likes: 1 },
              $addToSet: { 'usersWhoLiked': req.body.user } 
            }
          );
          console.log("Likes +1");
        //back to the relevant post where the Review is shown
        res.json({msg: addLikeHotSpring}); 
        }
        
      } catch (err) {
        console.log(err);
      }
    
    }
}