import { useEffect, useState, React } from "react";
import { readBlogs } from "../api/readBlogs";
import Card from '../components/Card'

const AllBlogs = () => {
    console.log("Welcome to the Blogs Page")
    const [user, setUser] = useState([]);
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('userName'));
      if (items) {
       setUser(items);   // getting googleAuto data from local storage
      }
    }, []);
    console.log(user)

    const [blogs,setBlogs] = useState([])
    let data=99
    useEffect(() => {
        const fetchBlogs = async () => {
            let data = await readBlogs() // read blogs from database   
            setBlogs(data.blog)
        }
        fetchBlogs()
    }, [])   
    

    if (!blogs) return <h1>Loading</h1>
    return (
        <>
        <div>               
            <h1>Welcome {user.displayName}</h1>     {/* Show name from google Auth */}
            {blogs ? blogs.map((blogs,index) => <Card blog={blogs} />) : <p>Loading...</p> } 
        </div>    {/* Show all blogs */}
        </>
    )
}
export default AllBlogs;