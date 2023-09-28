

const API_URL = `http://localhost:4000`

export const editBlogComments = async (blog,id) => {
    console.log(blog,id)
    let respose = await fetch(`${API_URL}/blogs/item/${id}`)
    let data = await respose.json()
    data.comments.push(blog.comments[0])
    /* Object.assign(data.comments, [{blog.comments[0]}]) */
    console.log(data)
    /* console.log(punk.items[0]) */
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { 
        comments: data.comments
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
