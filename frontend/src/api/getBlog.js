const API_URL = `http://localhost:4000`

export const getBlog = async (id) => {
    let respose = await fetch(`${API_URL}/blogs/item/${id}`)
    let data = await respose.json()
    
    return data
}