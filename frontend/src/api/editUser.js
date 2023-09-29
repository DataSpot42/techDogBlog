const API_URL = `http://localhost:4000`

export const editUser = async (user,id) => {
     
    /* console.log(punk.items[0]) */
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { userID: user.userID,
        userName: user.userName,
        realName: user.realName,
        avatar: user.avatar,
        email: user.email,
        gender: user.gender,
        aboutMe: user.aboutMe
        }
    
    const response = await fetch(`${API_URL}/users/user/${id}`,{
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
