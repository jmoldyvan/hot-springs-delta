const mongoose = require('mongoose')

const HotSpringSchema = mongoose.Schema({
})

module.exports = mongoose.model('hot-spring-cols', HotSpringSchema, 'hot-spring-col')
