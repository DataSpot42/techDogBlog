

const API_URL = `http://localhost:4000`

export const addBlog = async (blog) => {
    


    /* console.log(punk.items[0]) */
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { userID: blog.userID,
        blogID: blog.blogID,
        timeStamp: blog.timeStamp,
        title: blog.title,
        text: blog.text,
        group: blog.group,
        image: blog.image,
        tags: blog.tags,
        likes: blog.likes,
        comments: blog.comments
        }
    
    const response = await fetch(`${API_URL}/blogs/item`,{
        // method type?
        method: 'POST',
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
