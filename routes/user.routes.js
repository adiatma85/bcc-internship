const router = require('express').Router()
const userController = require('../controllers/user.controller')
const joiMiddleware = require("../middlewares/joiValidator")

// register tweet
router.post('/register', joiMiddleware, userController.registerUser)

// findall
router.get('/users', userController.findAll)

// getone
router.get('/:id', userController.findOne)

// update
router.put('/:id', userController.update)

// delete
router.delete('/delete/:id', userController.destroy)

module.exports = router