const API_URL = `http://localhost:4000`

export const readUsers = async (data) => {
     // fetch the data from this endpoint 
     // your backend server is running on port 4000
     // from your routes>items.js 
     // this request is for the 'getBlogs' controller
     console.log(data)
     let response = await fetch(`${API_URL}/users/users`)
     // convert to json()
     data = await response.json()
     console.log(data.user)
     let userdata = [{data}]
     // return the data collect from fetch 
     return data
}