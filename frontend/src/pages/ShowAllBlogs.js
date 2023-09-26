import { useEffect, useState, React } from "react";
import { readBlogs } from "../api/readBlogs";
import Card from '../components/Card'
import {HiSearch} from 'react-icons/hi'
import './showAllBlogs.css'
import Cards from '../components/Card.js'
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
    
    console.log(blogs)
    if (!blogs) return <h1>Loading</h1>
    return (
        <>
        <div>               
            <h1>Welcome {user.displayName}</h1> <div id="search-container">
                {/* Show name from google Auth */}
            <form id="SearchAllbg" method="get">
                <label>
                  { /* <button className="btn-allbg" type="submit" name="submit" className="submit" value="Search">submit</button> */}
                <input Id="searchBar2" Name="search" type="text" className="search" placeholder="Search Our blogs..."></input>
                
                </label>
            </form>
        </div>   
               
 <div className="grid-side-container">
        <div className="grid-side"></div>
        </div >
        <div className="blogsContainer">
            {blogs ? blogs.map((blogs,index) =><div className="blogsFlex">
    <Card blog={blogs} />
   
</div> ) : <p>Loading...</p> } 
        </div>    {/* Show all blogs */}
                </div>
 
        </>
    )
}
export default AllBlogs;