



const SearchChosenGroups = async (blogs, search) => {
  let searchArry = []
  console.log(blogs)
  console.log(search)
  
  for (let i = 0; i < blogs.length; i++) {    
      
      
    if (search===blogs[i].group  ) {
      console.log(blogs[i].group)
      searchArry.push(blogs[i])
    }
    
    


  }

   
  console.log('searched')
  console.log(searchArry)
  return searchArry
}


export default SearchChosenGroups