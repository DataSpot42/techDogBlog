import { useEffect, useState, React, forceUpdate } from "react";
import { UserAuth } from '../components/AuthContext';
import { readBlogs } from "../api/readBlogs";
import DataMerge from "../components/dataMerge";
import MyCard from '../components/MyCard'
import { HiSearch } from 'react-icons/hi'
import './showAllBlogs.css'
import { readUsers } from "../api/readUsers";
import MyDataMerge from "../components/MyDataMerge";
import { deleteBlog } from "../api/deleteBlog";




const ShowMyBlogs = () => {
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
            dataMerge= await MyDataMerge(dataBlogs, dataUsers, user)  // filtering blogs to show my blogs and adding user info
            console.log(dataMerge)
            setBlogs(dataMerge)  //updating blogs after filter
            setUsers(dataUsers)

        }
        fetchUsers()
    }, [])

    const deleteHandler = async (blog) => {
        deleteBlog(blog, blog._id)     // deletes item from database
        let updatedBlogs = await readBlogs()
        updatedBlogs = await readBlogs()  //updates basket display
        console.log(updatedBlogs)
        setBlogs(updatedBlogs)
    };


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
                    <MyCard blog={blogs}  deleteHandler={deleteHandler} />

                </div>) : <p>Loading...</p>}
                {/* Show all blogs */}
            </div >
        </div>

    )
}
export default ShowMyBlogs;