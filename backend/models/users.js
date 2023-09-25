// to define what the blog database will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const userSchema = new Schema({
    userID: {
        type: String
    },
    userName: {
        type: String
    },
    realName: {
        type: String
    },
    avatar: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    aboutme: [{
        type: String   
    }],          
}         
)

module.exports = mongoose.model('User', userSchema)