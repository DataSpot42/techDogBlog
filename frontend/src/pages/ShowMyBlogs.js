import { useEffect, useState, React } from "react";
import { UserAuth } from '../components/AuthContext';
import { readBlogs } from "../api/readBlogs";

import Card from '../components/Card'
import {HiSearch} from 'react-icons/hi'
import './showAllBlogs.css'
import Cards from '../components/Card.js'
import { readUsers } from "../api/readUsers";


const ShowMyBlogs = () => {
    const { logOut, user } = UserAuth();
    console.log("Welcome to the Blogs Page")    
    const [users, setUsers] = useState([]);
    /* useEffect(() => {
      const items = JSON.parse(localStorage.getItem('userName'));
      if (items) {
       setUser(items);   // getting googleAuto data from local storage
      }
    }, []); */
    console.log(user)

    const [blogs,setBlogs] = useState([])
    let data=99
    useEffect(() => {
        const fetchBlogs = async () => {
            let data = await readBlogs() // read blogs from database   
            setBlogs(data.blog)
        }
        const fetchUsers = async () => {
            let userData = await readUsers()  //read users from database
            setUsers(userData)
        }
        fetchBlogs()
        fetchUsers()
    }, [])   
    let aUserName = ""
    let aUserAvatar =""
    console.log(blogs)
    console.log(users)
    for (let p=0; p<blogs.length; p++){
        for (let q=0; q<users.user.length;q++) {
            if (blogs[p].userID === users.user[q].userID) {
                
                console.log(aUserName, aUserAvatar)
                Object.assign(blogs[p],{userName: users.user[q].userName}, {avatar: users.user[q].avatar})

                /* console.log(blogs[p].userID)
                console.log(users.user[q].userID) */
                
                
                /* blogs[p].push(aUserName)
                /* blogs[p].push(users.user[q].avatar) */
                /* console.log(`I have a match!`)
                console.log(blogs[p]) */
 
            }
        }
    }
    let myBlogs = []
    for (let u=0;u<blogs.length; u++) {
    
    if (!user.uid === blogs[u].userID) { 
        myBlogs.push(blogs[u])
    }
}
        
console.log(myBlogs)
    return (
        <div className="cc">               
            <h1>Welcome {user.displayName}</h1>
             <div id="search-container">
                {/* Show name from google Auth */}
            <form id="SearchAllbg" method="get">
                <label>
                  { /* <button className="btn-allbg" type="submit" name="submit" className="submit" value="Search">submit</button> */}
                <input Id="searchBar2" Name="search" type="text" className="search" placeholder="Search Our blogs..."></input>
                
                </label>
            </form>
        </div>   
               
 <div className="all-bg-grid">
       
        
        
            {blogs ? blogs.map((blogs,index) =><div className="blogsFlex">
    <Card blog={blogs} />
   
</div> ) : <p>Loading...</p> } 
          {/* Show all blogs */}
              </div > 
  </div>
       
    )
}
export default ShowMyBlogs;