import { useEffect, useState, React, forceUpdate } from "react";
import { UserAuth } from '../components/AuthContext';
import { readBlogs } from "../api/readBlogs";
import DataMerge from "../components/dataMerge";
import Card from '../components/Card'
import { HiSearch } from 'react-icons/hi'
import './showAllBlogs.css'
import Cards from '../components/Card.js'
import { readUsers } from "../api/readUsers";
import SearchChosenGroups from "../components/searchChosenGroups";
import { Comments } from './Comments'
import { Link } from "react-router-dom"
import SearchBlogs from '../components/searchBlogs.js'


const AllBlogs = () => {
    /* let dataBlogs= [] */
    let aUserName = ""
    let aUserAvatar = ""
    const { logOut, user } = UserAuth();
    console.log("Welcome to the Blogs Page")
    const [users, setUsers] = useState();
    const [selectedOption, setSelectedOption] = useState("Select Group");

    console.log(user)
    const [searchTerm, setSearchTerm] = useState("");
    
    const [searchResults, setSearchResults] = useState([]);

    const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
        
	};

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('searching....')
        console.log(searchTerm)
        let searchResult = []
        searchResult = await SearchBlogs(blogs, searchTerm)
        console.log(searchResult)
        setBlogs(searchResult)
    }
    const handleGroupFilter = async (e) => {
        e.preventDefault()

        console.log('searching....')
        console.log(selectedOption)
        let searchGroupResult = []
        searchGroupResult = await SearchChosenGroups(blogs, selectedOption)
        console.log(searchGroupResult)
        setBlogs(searchGroupResult)
    }
    const handleClearFilter = async () => {
        let response1 = await readUsers()  //read users from database
        let dataUsers = response1.user
        console.log(response1)
        let response2 = await readBlogs() // read blogs from database
        let dataBlogs = response2.blog
        console.log(dataUsers)
        let dataMerge = {}
        dataMerge = await DataMerge(dataBlogs, dataUsers)
        console.log(dataMerge)
        setBlogs(dataBlogs)
        setUsers(dataUsers)
    }



    const handleChangeSearch = () => {

        /* setBlogs(searchResult)*/


    };

    /* console.log(searchResults) */


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
            let dataMerge = {}
            dataMerge = await DataMerge(dataBlogs, dataUsers)
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
                <form id="SearchAllbg" method="get" onSubmit={(e) => handleSubmit(e)} >
                    <label>

                        <input value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} Id="searchBar2" Name="search" type="text" className="search" placeholder="Search Our blogs..."></input>
                        {/* <button onclick={handleChangeSearch}> Search </button> */}
                    </label>
                    <div className="bb">
                        <button className="btn-allbg" type="submit" name="submit" value="Search">submit</button>
                        <div className="select">
                            <label>
                                Select an option:&nbsp;&nbsp;
                                <select value={selectedOption} onChange={handleDropdownChange}>
                                <option value="Select Option">Select Option</option>
                                    <option value="Networking">Networking</option>
                                    <option value="Soft Dev">Soft Dev</option>
                                    <option value="Cloud Engineering">Cloud Engineering</option>
                                    <option value="IT Support">IT Support</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Consumer Tech">Consumer Tech</option>
                                </select>
                            </label>
                        </div>
                        <button className="btn-allbg" onClick={(e) => handleGroupFilter(e)}>Filter Group</button>
                        <button className="btn-allbg" onClick={(e) => handleClearFilter(e)}>Clear Filter</button>
                    </div>
                </form>
            </div>

            <div className="all-bg-grid">



                {blogs ? blogs.map((blogs, index) => <div className="blogsFlex">
                    <Card blog={blogs} />

                </div>) : <p>Loading...</p>}
                {/* Show all blogs */}
            </div >
            <div>

            </div>
        </div>

    )
}
export default AllBlogs;