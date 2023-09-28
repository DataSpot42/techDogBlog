
const DataMerge = async (blogs, users) => {
    console.log(blogs)
    console.log(users)
    for (let p = 0; p < blogs.length; p++) {
        for (let q = 0; q < users.length; q++) {
            if (blogs[p].userID === users[q].userID) {
                console.log(users[q].userID)
                Object.assign(blogs[p], { userName: users[q].userName }, { avatar: users[q].avatar })
            }
        }
    }
    console.log(blogs)
    return (blogs)
}
export default DataMerge