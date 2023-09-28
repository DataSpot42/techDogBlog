import { addUser } from "../api/addUser"

export const NewUser = async(formData) => {
    console.log(formData)
    console.log('welcome to newUser')
    let response = await addUser(formData)
    console.log(response)
    return response
}

