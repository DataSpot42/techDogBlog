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
     console.log(data)
     console.log(userID)
     console.log(regData)
     let edit=0
     let add =0
     let existingID=""
     
     let userData = (data.user)
     userData.forEach(checkData)
    console.log(userData)
     function checkData(item){
        if (item.userID===regData.userID) {
            console.log("here I am");
            edit=1
            existingID=item._id          
     } else {
        console.log("no Im here");
        add=1
       }}
       console.log(edit)
       if (edit===1){
        editUser(regData,existingID)}
        else {
        addUser(regData);}

     
        /* for (let i=0; i<userData.length; i++){
            console.log(userData[i])
            console.log('going through the list')
            if (data.user[i].userID === userID.uid) {
                console.log('should be true')
                return true
            } else {
                return false               
            
            }} */


     // return the data collect from fetch 
     
}