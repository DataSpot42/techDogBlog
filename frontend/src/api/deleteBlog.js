const API_URL = `http://localhost:4000`

export const deleteBlog = async (blog) => {
    console.log(blog)
    
    
    // add url which is for delete
    // add the _id for the ':id' param
    const response = await fetch(`${API_URL}/blogs/item/${blog._id}`, {
        // method type?\
        method: 'DELETE',         
        
        headers: {
            
            'Content-Type' : 'application/json'
            
        }
    })
  ;
  const json = await response.json()
    return json
    
}