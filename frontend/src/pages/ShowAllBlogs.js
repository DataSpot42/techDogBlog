import { useEffect, useState, React } from "react";
import { readBlogs } from "../api/readBlogs";
import Card from '../components/Card'

const AllBlogs = () => {
    console.log("Welcome to the Blogs Page")
    const [blogs,setBlogs] = useState([])
    let data=99
    useEffect(() => {
        const fetchBlogs = async () => {
            let data = await readBlogs()
            console.log(data)
            setBlogs(data.blog)
        }
        fetchBlogs()
    }, [])
    /* let response = await readBlogs(data) */
    /* setBlogs([response.blog]) */
    console.log(blogs)

    if (!blogs) return <h1>Loading</h1>
    return (
        <>
        <div>
            {blogs ? blogs.map((blogs,index) => <Card blog={blogs} />) : <p>Loading...</p> } 
        </div>
        </>
    )
}
export default AllBlogs;