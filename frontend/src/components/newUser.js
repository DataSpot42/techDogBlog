import { addUser } from "../api/addUser"

export const NewUser = async(formData) => {
    console.log(formData)
    console.log('welcome to newUser')
    let response = await addUser(formData)
    console.log(response)
    return response
}


/* 

const handler = async (e) => {
    e.preventDefault()
    let loginName = {}
    let loginArray = {
        orderNum: orderNumber,
        custName: userInput,
        items: [{item: 0}]          // initialises order with user name
            
 }         
    
    // what function will run?
    let response = await addPunk(loginArray)  */