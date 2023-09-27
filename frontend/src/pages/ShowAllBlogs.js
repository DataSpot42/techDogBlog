import { useEffect, useState, React } from "react";
import { UserAuth } from '../components/AuthContext';
import { readBlogs } from "../api/readBlogs";

import Card from '../components/Card'
import {HiSearch} from 'react-icons/hi'
import './showAllBlogs.css'
import Cards from '../components/Card.js'
import { readUsers } from "../api/readUsers";



const AllBlogs = () => {
    let aUserName = ""
    let aUserAvatar =""
    const { logOut, user } = UserAuth();
    console.log("Welcome to the Blogs Page")    
    const [users, setUsers] = useState();
    /* useEffect(() => {
      const items = JSON.parse(localStorage.getItem('userName'));
      if (items) {
       setUser(items);   // getting googleAuto data from local storage
      }
    }, []); */
    console.log(user)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChangeSearch = event => {
      setSearchTerm(event.target.value);
      
    };

    useEffect(() => {
        
        const fetchBlogs = async () => {
            let data = await readBlogs() // read blogs from database   
            setBlogs(data.blog.group)
        }
        const fetchUsers = async () => {
            let userData = await readUsers()  //read users from database
            setUsers(userData)
        }
        fetchBlogs()
        fetchUsers()
        
        const filterBlogs = async ()  => {
            const results =  blogs.includes(searchTerm)
         setSearchResults(results);
        }
        
        filterBlogs()


        
      }, [searchTerm]);

    const [blogs,setBlogs] = useState([])
    let data=99
    useEffect(() => {
        const fetchBlogs = async () => {
            let response1 = await readUsers()  //read users from database
            let dataUsers = response1.user
            setUsers(dataUsers)
            let response2 = await readBlogs() // read blogs from database
            let dataBlogs = response2.blog
            console.log(dataBlogs)
            console.log(users)
            if (typeof users!=='underfind'){
            for (let p=0; p<dataBlogs.length; p++){
                for (let q=0; q<users.length;q++) {
                    if (dataBlogs[p].userID === users[q].userID) {                        
                        console.log(aUserName, aUserAvatar)
                        Object.assign(dataBlogs[p],{userName: users[q].userName}, {avatar: users[q].avatar})
                        setBlogs(dataBlogs)
                        console.log(dataBlogs)}
         
                    }
                }
            }   
            

        }
            /* const mergeData = () => {
            
                console.log('passing through')
                console.log(users);
                console.log(data) */
                
            
                
                /* const secondcheck =() => {
                    console.log('first check done')
                    if (blogs.length<0 && users.user.length<0) (mergeData())
                }     */
                

            
       /*  } */
        
        
        fetchBlogs()
        /* if (users!=='underfind') {mergeData()}  */
        
        
        
        

    }, [])   

 /*    useEffect(()=> {
        const mergeData = () => {
            
            console.log('passing through')
            console.log(users);
            console.log(blogs)
            for (let p=0; p<blogs.length; p++){
                for (let q=0; q<users.user.length;q++) {
                    if (blogs[p].userID === users.user[q].userID) {                        
                        console.log(aUserName, aUserAvatar)
                        Object.assign(blogs[p],{userName: users.user[q].userName}, {avatar: users.user[q].avatar})
        
         
                    }
                }
            }
        
            }
            const secondcheck =() => {
                console.log('first check done')
                if (blogs.length<0 && users.user.length<0) (mergeData())
            }    
            if (typeof blogs !== 'undefined' && users!=='underfind') {mergeData()}
    },[users]) */
    
    console.log(blogs)
    console.log(users)
    


    if (!blogs) return <h1>Loading</h1>
    return (
      
        <div className="cc"> 
                      
             <div id="search-container">
                {/* Show name from google Auth */}
            <form id="SearchAllbg" method="get">
                <label>
                  { /* <button className="btn-allbg" type="submit" name="submit" className="submit" value="Search">submit</button> */}
                <input value={searchTerm}
          onChange={handleChangeSearch} Id="searchBar2" Name="search" type="text" className="search" placeholder="Search Our blogs..."></input>
                
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
export default AllBlogs;