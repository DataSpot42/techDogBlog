const API_URL = `http://localhost:4000`

export const readBlogs = async (data) => {
     // fetch the data from this endpoint 
     // your backend server is running on port 4000
     // from your routes>items.js 
     // this request is for the 'getBlogs' controller
     
     let response = await fetch(`${API_URL}/blogs/items`)
     // convert to json()
     data = await response.json()
     
     
     // return the data collect from fetch 
     return data
}