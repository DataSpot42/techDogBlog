import { useEffect, useState, React } from "react";
import { UserAuth } from '../components/AuthContext';
import { readBlogs } from "../api/readBlogs";

import Card from '../components/Card'
import { HiSearch } from 'react-icons/hi'
import './showAllBlogs.css'
import Cards from '../components/Card.js'
import { readUsers } from "../api/readUsers";


const ShowMyBlogs = () => {
    const { logOut, user } = UserAuth();
    const [myUser, setMyUser] = useState();
    console.log("Welcome to the Blogs Page")
    const [users, setUsers] = useState([]);
   
    
    const [myBlogs,setMyBlogs] = useState([])
    const [blogs, setBlogs] = useState([])
    let data = 99
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
    }, [data])
    let aUserName = ""
    let aUserAvatar = ""
   
    for (let p = 0; p < blogs.length; p++) {
        for (let q = 0; q < users.user.length; q++) {
            if (blogs[p].userID === users.user[q].userID) {

                console.log(aUserName, aUserAvatar)
                Object.assign(blogs[p], { userName: users.user[q].userName }, { avatar: users.user[q].avatar })

            }
        }
    }
    
    
    let myBlog = []
    for (let u = 0; u < blogs.length; u++) {

        if (user.uid === blogs[u].userID) {
            myBlog.push(blogs[u])

        }
    }
    
    useEffect(() => {
        const filterMyBlogs = async () => {
            setMyBlogs(myBlog)
            console.log('useEffective')
        }
        filterMyBlogs()
    }, [])
    

    return (
        <div className="cc">
          
            <div id="search-container">
              
                <form id="SearchAllbg" method="get">
                    <label>
                       
                        <input Id="searchBar2" Name="search" type="text" className="search" placeholder="Search Our blogs..."></input>

                    </label>
                </form>
            </div>

            <div className="all-bg-grid">



                {myBlogs? myBlogs.map((myBlogs, index) => <div className="blogsFlex">
                    <Card myBlogs={myBlogs} />

                </div>) : <p>Loading...</p>}
                {/* Show all blogs */}
            </div >
        </div>

    )
}
export default ShowMyBlogs;