const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getBlogs)
router.get('/item/:id', itemsController.getBlog)
router.post('/item', itemsController.createBlog)
router.patch('/items/:id', itemsController.editBlog)
router.delete('/items/:id', itemsController.deleteBlog)
router.delete('/items/', itemsController.deleteBlogs)
module.exports = router