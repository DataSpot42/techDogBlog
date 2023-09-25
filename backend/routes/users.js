const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/users')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getUsers)
router.get('/item/:id', itemsController.getUser)
router.post('/item', itemsController.createUser)
router.patch('/items/:id', itemsController.editUser)
router.delete('/items/:id', itemsController.deleteUser)
module.exports = router