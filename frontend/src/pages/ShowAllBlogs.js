import { useEffect, useState, React } from "react";
import { readBlogs } from "../api/readBlogs";
import Card from '../components/Card'

const AllBlogs = async () => {
    console.log("Welcome to the Blogs Page")
    const [blogs,setBlogs] = useState()
    let response = await getBlogs()
    setPunks(blogs)
    console.log(blogs)

    if (!blogs) return <h1>Loading</h1>
    return (
        <div>
            {/* {blogs ? blogs.map((blogs,index =>{Card key={blog.id}})) : } */}
        </div>
    )
}