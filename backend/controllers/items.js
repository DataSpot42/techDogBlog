const Blog = require("../models/blogs")


const createBlog = async (req, res) => {
    const { userID } = req.body
    const { blogID } = req.body
    const { timeStamp } = req.body
    const { title } = req.body
    const { text } = req.body
    const { group } = req.body
    const { image } = req.body
    const {  tags } = req.body
    const { likes } = req.body
    const { comments } = req.body
    
    console.log(userID, blogID,timeStamp,title,text,group,image,tags,likes,comments)
    const blogObj = new Blog({
        userID, blogID,timeStamp,title,text,group,image,tags,likes,comments
})
// await for it to be saved
    const newBlog = await blogObj.save()
    // respond with json()
    res.status(200).json(newBlog)
}

const getBlogs = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Blog.find({})
    // respond with and object that has a message and the items from the DB
    res.json({
        message: "all items",
        blog: items
    })
}
const getBlog = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const blog = await Blog.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(blog)
}
const editBlog = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
    const blog = await Blog.findByIdAndUpdate(id, ({
    userID: req.body.userID,
    blogID: req.body.blogID,    
    timeStamp: req.body.timeStamp, 
    title: req.body.title,
    text: req.body.text,    
    group: req.body.group,
    image: req.body.image,
    tags: req.body.tags,    
    likes: req.body.likes,
    comments: req.body.comments

    
}))
    res.status(200).json(blog)
}
const deleteBlog = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
    const blog = await Blog.findByIdAndDelete(id)
    res.status(200).json(blog)
}
const deleteBlogs = async (req, res) => {
    // find all items from a mongoose Model method 
    const blog = await Blog.deleteMany()
    // respond with and object that has a message and the items from the DB
    res.status(200).json(blog)
} 


module.exports = {

    getBlogs,
    getBlog,
    createBlog,
    editBlog,
    deleteBlog,
    deleteBlogs
   
}