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
app.use(cors());

require('dotenv').config({path: './config/.env'})

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
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    


// I would deploy your frontend on Vercel. For the backend, I'm actually not aware of any free Node servers anymore now that Heroku stopped 
// doing a free tier...Ah, looks like render.com/pricing looks like it still has a free tier.

// After you deploy your backend, you will have a URL. 
// You will need to set that as an environment variable 
// for your frontend so it can know where to look for your fetch calls. 
// This will mean changing your application code so that it uses an environment 
// variable as the root of your fetch requests.