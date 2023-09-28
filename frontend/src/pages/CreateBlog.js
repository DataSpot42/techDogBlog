import { useState, useEffect } from "react"
import { addBlog } from "../api/addBlog"
import { useNavigate } from "react-router-dom"
import { UserAuth } from '../components/AuthContext';
import Tags from "../components/Tags";
import './createBlog.css'


import "../components/addblog.css"

const CreateBlog = () => {
    const { logOut, user } = UserAuth();
    const [inputValue, setInputValue] = useState('');
    console.log(user)
    
    
    /* const [timeStamp, setTimeStamp] = useState();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [group, setGroup] = useState("");
    const [image, setImage] = useState("");
    const [tags, setTags] = useState ([]);
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]); */

    const [formData, setFormData] = useState({title: "",text: "",group: ""});
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
            alert(`title: ${formData.title}, text: ${formData.text}, Group: ${selectedOption} Image:${formData.image}`);
            let timestamp = Date.now();
            let blogObj = { 
                userID: user.uid,
                blogID: 456,
                image: formData.image,
                
                likes: 0,
                title: formData.title,
                text: formData.text,
                timeStamp: timestamp,
                group: selectedOption
            }
            let response = await addBlog(blogObj)  
        } 


        return (
            <div className = "blog">
            <h1> Create a new blog post </h1>
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
            <input id="image" className="image" value={formData.image} onChange={handleChange}/>
            <Tags onChange={(event) => setInputValue(event.target.value)}/>
            
          </form>
          <button className = "post" onClick={()=>handleSave()}>Post</button>
          </div>

        )
    }
    export default CreateBlog

