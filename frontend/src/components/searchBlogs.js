



const SearchBlogs = async (blogs, search) => {
  let searchArry = []
  console.log(blogs)
  console.log(search)
  let lowertitle = ""
  let lowertext = ""

  for (let i = 0; i < blogs.length; i++) {
      lowertitle = blogs[i].title.toLowerCase()
      lowertext = blogs[i].text.toLowerCase()
      
    if (lowertitle.includes(search.toLowerCase()) || lowertext.includes(search.toLowerCase()) ) {
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