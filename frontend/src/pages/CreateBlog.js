import { useState } from "react"
import { addBlog } from "../api/addBlog"
import { useNavigate } from "react-router-dom"

import "../components/addblog.css"

const CreatBlog = () => {
    /* const [timeStamp, setTimeStamp] = useState();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [group, setGroup] = useState("");
    const [image, setImage] = useState("");
    const [tags, setTags] = useState ([]);
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]); */

    const [formData, setFormData] = useState({title: "",text: "",group: ""});
    const [selectedOption, setSelectedOption] = useState("option1");

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
        
	};

    const navigate = useNavigate();

    /* const handlerBlogInput = async (e) => {
        e.preventDefault() */

        const handleSubmit = (event) => {
            event.preventDefault();
            alert(`title: ${formData.title}, text: ${formData.text}, Group: ${selectedOption}`
            );
        };    


        return (
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="title" id="title" name="title" value={formData.title} onChange={handleChange}/>
      
            <label htmlFor="text">Text:</label>
            <input type="text" id="text" name="text" value={formData.text} onChange={handleChange}/>

            <label>
			Select an option:
				<select  value={formData.group} onChange={handleDropdownChange}>
				<option  value="option1">Option 1</option>
				<option  value="option2">Option 2</option>
				<option  value="option3">Option 3</option>
			</select>
		</label>
		<p>Selected option: {formData.group}</p>

      
            <label htmlFor="image">Message:</label>
            <textarea id="image" name="image" value={formData.image} onChange={handleChange}/>
      
            <button type="submit">Submit</button>
          </form>
        )
    }

