import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {editBlog} from '../api/editBlog';
import { getBlog } from "../api/getBlog";
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router";
import Tags from "../components/Tags";
import './editMyBlogs.css';

const MoreBlogInfo = (blog) => {
    const [inputValue, setInputValue] = useState('');
    console.log(blog)
    let locationData = useLocation;
    console.log(locationData.state)

    console.log("welcome to MoreBlogInfo")
    const { id } = useParams()
    
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const submitHandler = async (blog) => {       
        let obj = {
            _id: toUpdate._id,
            text: userInput,        
        }
       let response = await editBlog(obj,id)         
        console.log(response)
 
        return(obj)
    }
 
    const navigate = useNavigate();

    
        const handleChange = (event) => {
            const { name, value } = event.target;
        }

        const handleSubmit =  async (e) => {
            
            e.preventDefault();
            
        };   
        const handleSave = async () => {
            console.log(`Saved`)
            
            console.log(toUpdate)
            
            let blogObj = { 
                
            }
            let response = await editBlog(blogObj,id)  
            /* navigate */
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
    
    <div className="edit-container">
             
        <div>
        <div className='card_item'>
            <div className="card_top">
                 <div className="card-img-top"> 
                 <img src={toUpdate.image} alt="BlogImage" height="100" width="auto" ></img></div>

                 <div className="subjectGroup"><p>{toUpdate.group}</p></div> 
                
                
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
            <div className = "blog">
            <h1>{toUpdate.title}</h1>
            <label htmlFor="text">Text:</label>
            <p></p>
            <div className="textline">{toUpdate.text}</div>
            <label htmlFor="text">Comments:</label>
            <p></p>
            <div className="textline">{toUpdate.comments[0].comment}</div>
            <form onSubmit={handleSubmit}>
                <div className = "container"> 
                <div className = "title">
           
            </div>
            
        </div>
      
           
            
            <label htmlFor="text"> Add Comment:</label>
            <p></p>
            <textarea className = "textbox" id="text" name="text" 
            value={blog.text} onChange={handleChange}/>
          </form>
          <button className = "post" onClick={()=>handleSave()}>Add Comment</button>

          </div>
            
        </div>
        
        
    )
        
    


}    

export default MoreBlogInfo; 