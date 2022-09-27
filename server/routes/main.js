const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const hotSpringController = require('../controllers/hotSpring')
const contactController = require('../controllers/contact')
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

router.post('/contact', contactController.postContact)

module.exports = router