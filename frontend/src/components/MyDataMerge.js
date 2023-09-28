


const MyDataMerge = async (blogs, users,user) => {
    console.log(user)
    console.log(blogs)
    console.log(users)
    let myblogs = []
   for(let u=0; u < blogs.length;u++) {
       if (blogs[u].userID === user.uid) {
           myblogs.push(blogs[u])
       }
   }
    for (let p = 0; p < myblogs.length; p++) {
        for (let q = 0; q < users.length; q++) {
            if (myblogs[p].userID === users[q].userID) {
                console.log(users[q].userID)
                Object.assign(myblogs[p], { userName: users[q].userName }, { avatar: users[q].avatar })
            }
        }
    }

    console.log(myblogs)
    return (myblogs)
}
export default MyDataMerge