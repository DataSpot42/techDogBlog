import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {editBlog} from '../api/editBlog';
import { getBlog } from "../api/getBlog";
import './editMyBlogs.css';

const EditMyBlogs = (blog) => {
    console.log(blog)

    console.log("welcome to EditMyBlogs")
    const { id } = useParams()
    
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const submitHandler = async (blog) => {       
        let obj = {
            _id: toUpdate._id,
            text: userInput,        
        }
       let response = await editBlog(obj)         
        console.log(response)
               
        
        return(obj)
    }

    useEffect(() => {
        const fetchBlog = async () => {
            let data = await getBlog(id)
            setToUpdate(data)
            console.log(data)
        }
        fetchBlog()
    },[])
    if (!toUpdate) return <h1>Loading</h1>
    return (
    
        <div>
             
    
        <div className='card_item'>
            <div className="card_top">
                 <div className="card-img-top"> <img src={toUpdate.image} alt="BlogImage" height="100" width="auto" ></img>{/*blog.image*/}</div>

                 <div className="subjectGroup"><p>{toUpdate.group}</p>{/**/}</div> 
                
                
            </div>

            <div className="detail-box">
                <h1>{toUpdate.title}</h1>
            <div className="cardText">{toUpdate.text}</div>
           
            
            </div>
            < div className="card-bottom">
                

               <div className="display-profile-card">
           

            <div className="useInfo">{toUpdate.userName}</div>
            </div>
              


               <div className="tags-cards"><p>#Computing</p></div>
                
               
            </div>
            
        </div>
        </div>

    )

    


}    

export default EditMyBlogs 