import { useEffect, useState, React, forceUpdate } from "react";
import { UserAuth } from '../components/AuthContext';
import { readBlogs } from "../api/readBlogs";
import DataMerge from "../components/dataMerge";
import Card from '../components/Card'
import { HiSearch } from 'react-icons/hi'
import './showAllBlogs.css'
import Cards from '../components/Card.js'
import { readUsers } from "../api/readUsers";
import {Comments} from './Comments'
import {Link} from "react-router-dom"


const AllBlogs = () => {
    /* let dataBlogs= [] */
    let aUserName = ""
    let aUserAvatar = ""
    const { logOut, user } = UserAuth();
    console.log("Welcome to the Blogs Page")
    const [users, setUsers] = useState();

    console.log(user)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChangeSearch = event => {
        setSearchTerm(event.target.value);

    };


    const [blogs, setBlogs] = useState([])
    let data = 99
    useEffect(() => {
        const fetchUsers = async () => {
            let response1 = await readUsers()  //read users from database
            let dataUsers = response1.user
            console.log(response1)
            let response2 = await readBlogs() // read blogs from database
            let dataBlogs = response2.blog
            console.log(dataUsers)
            let dataMerge={}
            dataMerge= await DataMerge(dataBlogs, dataUsers)
            console.log(dataMerge)
            setBlogs(dataBlogs)
            setUsers(dataUsers)
        }
        fetchUsers()
    }, [])


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



                {blogs ? blogs.map((blogs, index) => <div className="blogsFlex">
                    <Card blog={blogs} />
                    <Link className="btnLinks"

to={`/Comments`}> Comments </Link>
                </div>) : <p>Loading...</p>}
                {/* Show all blogs */}
            </div >
            <div>
            
            </div>
        </div>

    )
}
export default AllBlogs;