const mongoose = require('mongoose')

const HotSpringSchema = mongoose.Schema({
  nocapsname: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  resort: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
    likes: {
        type: Number,
        required: true,
      },
    usersWhoLiked:{
      type:[mongoose.Schema.Types.ObjectId], 
      required: true,
      validate: v => v == null || v.length > 0
        } 

})

module.exports = mongoose.model('hot-spring-cols', HotSpringSchema, 'hot-spring-col')
