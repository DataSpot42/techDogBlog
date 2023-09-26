import { useState, useEffect } from "react"
import { addBlog } from "../api/addBlog"
import { useNavigate } from "react-router-dom"
import { UserAuth } from '../components/AuthContext';



import "../components/addblog.css"

const CreateBlog = () => {
    const { logOut, user } = UserAuth();
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
            e.preventDefault();
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
        };    


        return (
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="title" id="title" name="title" value={formData.title} onChange={handleChange}/>
      
           

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
		<p>Selected option: {selectedOption}</p>

      
            <label htmlFor="text">Text:</label>
            <textarea id="text" name="text" value={formData.text} onChange={handleChange}/>
            <label htmlFor="image">Add Image URL:</label>
            <input id="image" name="image" value={formData.image} onChange={handleChange}/>
      
            <button type="submit">Submit</button>
          </form>
        )
    }
    export default CreateBlog

