

const API_URL = `http://localhost:4000`

export const editBlog = async (blog,id) => {
    console.log(blog,id)

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
    console.log(obj)
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
