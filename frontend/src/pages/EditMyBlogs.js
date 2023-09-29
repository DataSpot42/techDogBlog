import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {editBlog} from '../api/editBlog';
import { getBlog } from "../api/getBlog";
import { useNavigate } from "react-router-dom"
import Tags from "../components/Tags";
import './editMyBlogs.css';

const EditMyBlogs = (blog) => {
    const [inputValue, setInputValue] = useState('');
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
       let response = await editBlog(obj,id)         
        console.log(response)
               
        
        return(obj)
    }
    const [formData, setFormData] = useState({title: "",text: "",group: "", image: ""});
    const [selectedOption, setSelectedOption] = useState("Networking");
    

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
        
	};

    const navigate = useNavigate();

    /* const handlerBlogInput = async (e) => {
        e.preventDefault() */

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
          };

        const handleSubmit =  async (e) => {
            console.log(formData)
            console.log(inputValue)
            e.preventDefault();
            
        };   
        const handleSave = async () => {
            console.log(`Saved`)
            
            console.log(formData)
            console.log(blog)
            console.log(toUpdate)
            let timestamp = Date.now();
            let blogObj = { 
                userID: formData.userID,
                blogID: 456,
                image: formData.image,                
                likes: formData.likes,
                title: formData.title,
                text: formData.text,
                timeStamp: formData.timeStamp,
                group: selectedOption
            }
            let response = await editBlog(blogObj,id)
            let data = await getBlog(id)
            setToUpdate(data)  
            /* navigate */
        }



    useEffect(() => {
        const fetchBlog = async () => {
            let data = await getBlog(id)
            setToUpdate(data)
            console.log(data)
            setFormData((prevFormData) => ({ ...prevFormData, title: data.title, text: data.text, image: data.image, tags: data.tags, userName: data.userName, userID: data.userID, timeStamp: data.timeStamp, likes: data.likes  }))
            setSelectedOption(data.group);
        }
        fetchBlog()
    },[])
    console.log(formData)
    if (!toUpdate) return <h1>Loading</h1>
    return (
    
        <div className="edit-container">
             
    
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
            
            <div className = "blog">
            <h1> Update your blog post </h1>
            <form onSubmit={handleSubmit}>
                <div className = "container"> 
                <div className = "title">
            <label  htmlFor="title">Title:</label>
            <p></p>
            <input className = "titlebox" type="title" id="title" name="title" value={formData.title} onChange={handleChange}/>
            <p></p>
            </div>
            <div className = "select">
            <label>
			Select an option:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="Networking">Networking</option>
				<option  value="Soft Dev">Soft Dev</option>
				<option  value="Cloud Engineering">Cloud Engineering</option>
                <option  value="IT Support">IT Support</option>
                <option  value="Web Design">Web Design</option>
                <option  value="Consumer Tech">Consumer Tech</option>
			</select>
		</label>
		<p className = "select1">Selected option: {selectedOption}</p>
        </div>
        </div>
      
            <label htmlFor="text">Text:</label>
            <p></p>
            <textarea className = "textbox" id="text" name="text" value={formData.text} onChange={handleChange}/>
            <p></p>
            <label htmlFor="image">Add Image URL:</label>
            <p></p>
            <input id="image" className="image" name="image" value={formData.image} onChange={handleChange}/>
            <Tags onChange={(event) => setInputValue(event.target.value)}/>
            
          </form>
          <button className = "post" onClick={()=>handleSave()}>Update</button>

          </div>
            
        </div>
        

    )

    


}    

export default EditMyBlogs 