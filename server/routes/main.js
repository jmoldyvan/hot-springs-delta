const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const hotSpringController = require('../controllers/hotSpring')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/:userid/profile", ensureAuth, postsController.getOtherUserProfile);
router.get('/hotspringdbinfo', hotSpringController.getHSDBInfo)
router.post('/hotspringdbinfo/findNearest', hotSpringController.findNearest)
// router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router