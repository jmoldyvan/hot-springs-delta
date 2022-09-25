const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')
  
  exports.postLogin = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })
  
    if (validationErrors.length) {
      // req.flash('errors', validationErrors)
      return res.json([{msg: validationErrors[0].msg}])
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err) }
      if (!user) {
        // req.flash('errors', info)
        // might need to change info to a messege
        return res.json([{msg: info.msg}])
      }
      req.logIn(user, (err) => {
        if (err) { return next(err) }
        // req.flash('success', { msg: 'Success! You are logged in.' })
        res.json([{ msg: 'Success! You are logged in.' }])
        // i think i needto return the user _id here along with msg. maybe the whole user obj
        // say welcome back ${username}
        // save the user obj to a state thats initially set in app.js and passed to profile
        // profile with check if stateis filled and if yes fill with user pic, username
        // profile with chekc if state if fill then fetch for the users reviews and saves
      })
    })(req, res, next)
  }
  
  exports.logout = (req, res) => {
    req.logout(() => {
      console.log('User has logged out.')
    })
    req.session.destroy((err) => {
      if (err) console.log('Error : Failed to destroy the session during logout.', err)
      req.user = null
      res.json([{ msg: 'ERROR' }])
    })
  }
  
  // exports.getSignup = (req, res) => {
  //   if (req.user) {
  //     return res.json({message:"This email already registed !!"})
  //   }
  //   res.render('signup', {
  //     title: 'Create Account'
  //   })
  // }
  
  exports.postSignup = (req, res, next) => {
    if (req.user) {
      return res.json([{message:"This email already registed !!"}])
    }
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
    if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
    // if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
  
    if (validationErrors.length) {
      // req.flash('errors', validationErrors)
      return res.json([{msg: validationErrors[0].msg}])
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
  
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })
    console.log(req.body)
    User.findOne({$or: [
      {email: req.body.email},
      {userName: req.body.userName}
    ]}, (err, existingUser) => {
      if (err) { return next(err) }
      if (existingUser) {
        // req.flash('errors', { msg: 'Account with that email address or username already exists.' })
        return res.json([{ msg: 'Account with that email address or username already exists.' }])
      }
      user.save((err) => {
        if (err) { return next(err) }
        req.logIn(user, (err) => {
          if (err) {
            return next(err)
          }
          res.json([{ msg: 'You\'ve signed up! Check out the profile tab.' }])
        })
      })
    })
  }