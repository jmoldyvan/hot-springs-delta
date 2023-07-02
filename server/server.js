const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const reviewRoutes = require('./routes/reviews')
const cors = require("cors");
// const nodemailer = require("nodemailer");
app.use(cors());

require('dotenv').config({path: "./config/database"})

// Passport config
require('./config/passport')(passport)

connectDB()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use('/', mainRoutes)
app.use("/reviews", reviewRoutes);
 
// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "westcoasthotsprings@gmail.com",
//     pass: 'LazeyBoiStart456930!!',
//   },
// });
// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    