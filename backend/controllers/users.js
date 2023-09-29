const User = require("../models/users")

const createUser = async (req, res) => {
    const { userID } = req.body
    const { userName } = req.body
    const { realName } = req.body
    const { avatar } = req.body
    const { email } = req.body    
    const { aboutme } = req.body


    console.log(userID,userName,realName,avatar,email,aboutme)
    const userObj = new User({
        userID, userName,realName,avatar,email,aboutme
    })
    // await for it to be saved
    const newUser = await userObj.save()
    // respond with json()
    res.status(200).json(newUser)
    }

    
const getUsers = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await User.find({})
    // respond with and object that has a message and the items from the DB
    res.json({
        message: "all items",
        user: items
    })
}
const getUser = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const user = await User.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(user)
}
const editUser = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
    const user = await User.findByIdAndUpdate(id, ({
    userID: req.body.userID,
    userName: req.body.userName,    
    realName: req.body.realName, 
    avatar: req.body.avatar,
    email: req.body.email,       
    aboutMe: req.body.aboutMe
}))
    res.status(200).json(user)
}
const deleteUser = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
    const user = await User.findByIdAndDelete(id)
    res.status(200).json(user)
}
const deleteUsers = async (req, res) => {
    // find all items from a mongoose Model method 
    const user = await User.deleteMany()
    // respond with and object that has a message and the items from the DB
    res.status(200).json(user)
} 


module.exports = {

    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser,
    deleteUsers
   
}

//


