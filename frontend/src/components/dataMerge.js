
const DataMerge = async (blogs, users) => {
    
    for (let p = 0; p < blogs.length; p++) {
        for (let q = 0; q < users.length; q++) {
            if (blogs[p].userID === users[q].userID) {
                
                Object.assign(blogs[p], { userName: users[q].userName }, { avatar: users[q].avatar })
            }
        }
    }
    
    return (blogs)
}
export default DataMerge