import { editUser } from "./editUser"
import { addUser } from "./addUser"

const API_URL = `http://localhost:4000`

export const checkUsers = async (userID,regData) => {
     // fetch the data from this endpoint 
     // your backend server is running on port 4000
     // from your routes>items.js 
     // this request is for the 'getBlogs' controller
     
     let response = await fetch(`${API_URL}/users/users`)
     // convert to json()
     let data = await response.json()
     
     let edit=0
     let add =0
     let existingID=""
     
     let userData = (data.user)
     userData.forEach(checkData)
    
     function checkData(item){
        if (item.userID===regData.userID) {
            
            edit=1
            existingID=item._id          
     } else {
                        // if user had registeted editUser, else addUser
        add=1
       }}
       console.log(edit)
       if (edit===1){
        editUser(regData,existingID)}
        else {
        addUser(regData);}

     

     
}