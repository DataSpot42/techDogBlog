import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { addBlog } from "../api/addBlog";
import { UserAuth } from '../components/AuthContext';

const Comments = () => {
    const { logOut, user } = UserAuth();
    const [inputValue, setInputValue] = useState('');
    console.log(user)

    const [formData, setFormData] = useState({title: "",text: "",group: ""});
    const [selectedOption, setSelectedOption] = useState("Networking");

const navigate = useNavigate();
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
    alert(`text: ${formData.text}`);
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


    return(
        <div>
            <h1> Add a comment ... </h1>
            <textarea className = "textbox" id="text" name="text" value={formData.text} onChange={handleChange}/>
            <button> comment </button>
        </div>
    )
}


export default Comments 
