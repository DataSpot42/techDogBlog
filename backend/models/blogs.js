// to define what the blog database will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const blogSchema = new Schema({
    userID: {
        type: Number
    },
    blogID: {
        type: Number
    },
    timeStamp: {
        type: Number
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    group: {
        type: String
    },
    image: {
        type: String
    },
    tags: [{
        tag: Number
    }],
    likes: {
        type: Number
    },
    comments: [{
        userID: {type: Number},    
        comment: {type: String}      
    }]           
}         
)

module.exports = mongoose.model('Blog', blogSchema)