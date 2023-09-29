



const SearchChosenGroups = async (blogs, search) => {
  let searchArry = []
    
  for (let i = 0; i < blogs.length; i++) {    
      
      
    if (search===blogs[i].group  ) {
      
      searchArry.push(blogs[i])
    }
    
    


  }

   
  
  return searchArry
}


export default SearchChosenGroups