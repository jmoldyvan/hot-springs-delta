const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const authController = require('../controllers/auth') 
const hotSpringController = require('../controllers/hotSpring')
const contactController = require('../controllers/contact')
const profilePostController = require('../controllers/profilepost')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/hotspringdbinfo', hotSpringController.getHSDBInfo)
router.post('/hotspringdbinfo/findNearest', hotSpringController.findNearest)
router.post('/hotspringdbinfo/findNearest', hotSpringController.findNearest)

// ****************************
router.put('/hotspringdbinfo/like/:id', hotSpringController.addLike)
// ****************************

router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.post('/signup', authController.postSignup)

// ****************************
router.get('/getprofilepic/:id', profilePostController.getProfilePost)
router.post('/updateprofilepic/:id', upload.single("fileInput"), profilePostController.updateProfilePost)
router.delete('/deleteprofile/:id', profilePostController.deleteProfilePost)
// ****************************

router.post('/contact', contactController.postContact)

module.exports = router