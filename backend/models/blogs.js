// to define what the blog database will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const blogSchema = new Schema({
    userID: {
        type: String
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
        type: String
    }],
    likes: {
        type: Number
    },
    comments: [{
        userID: {type: String},    
        comment: {type: String}      
    }]           
}         
)

module.exports = mongoose.model('Blog', blogSchema)