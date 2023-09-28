



const SearchBlogs = async (blogs, search) => {
  let searchArry = []
  console.log(blogs)
  console.log(search)

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].title.includes(search)) {
      searchArry.push(blogs[i])
    }
    if (blogs[i].text.includes(search)) {
      searchArry.push(blogs[i])
    }
    


  }

  console.log(blogs)
  console.log(search)
  console.log('searched')
  console.log(searchArry)
  return searchArry
}


export default SearchBlogs