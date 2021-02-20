const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')

// create user
router.post('/create', userController.createUser)

// findall
router.get('/users', userController.findAll)

// getone
router.get('/:id', userController.findOne)

// update
router.put('/:id', userController.update)

// delete
router.delete('/delete/:id', userController.delete)

module.exports = router