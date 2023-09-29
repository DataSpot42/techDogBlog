

const API_URL = `http://localhost:4000`

export const editBlog = async (blog,id) => {
    console.log(blog,id)

    /* console.log(punk.items[0]) */
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { 
        group:blog.group,
        image:blog.image,
        text:blog.text,
        title:blog.title,
        
        }
    
    const response = await fetch(`${API_URL}/blogs/item/${id}`,{
        // method type?
        method: 'PATCH',
        // sending body, stringify data
        body: JSON.stringify(obj),
        // content type?
        headers: {
            'Content-Type' : 'application/json'

        }
    })
    const json = await response.json()
    return json
}
