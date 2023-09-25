const express = require('express')
const router = express.Router() // create a router
const usersController = require('../controllers/users')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database

router.get('/users', usersController.getUsers)
router.get('/user/:id', usersController.getUser)
router.post('/user', usersController.createUser)
router.patch('/users/:id', usersController.editUser)
router.delete('/users/:id', usersController.deleteUser)

module.exports = router