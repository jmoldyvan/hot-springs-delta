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
router.post('/updateprofilepic/:id', upload.single("data"), profilePostController.updateProfilePost)
router.delete('/deleteprofile/:id', profilePostController.deleteProfilePost)
// ****************************

router.post('/contact', contactController.postContact)

// ****************************
// name of hotspring endpoint
router.get('/hotspringdbinfo/:id', hotSpringController.getHSDataName)
// state abbrev endpoint
router.get('/hotspringdbinfo/state/:id', hotSpringController.getHSDataStates)
// is/isnotresort endpoint
router.get('/hotspringdbinfo/resort/:id', hotSpringController.getHSDataIsResort)
// has website endpoint
router.get('/hotspringdbinfo/haswebsite/haswebsite', hotSpringController.getHSDataHasWebsite)


module.exports = router