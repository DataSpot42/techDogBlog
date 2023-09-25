import Avatar from './Avatar.js'
import { useState, useEffect } from "react"
import { addBlog } from "../api/addBlog"
import { useNavigate } from "react-router-dom"

const RegPage = () => {
    const [chosenAvatar,SetChosenAvator] = useState("")
    const [gender,SetGender] = useState("")
    const [user, setUser] = useState([]);
    const [formData, setFormData] = useState(
        {userName: "",aboutMe: "",group: "", gender: "", realName: "", email: "", userID: ""});
    const [selectedOption, setSelectedOption] = useState("Select");

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('userName'));
        if (items) {
         setUser(items);
         
         setFormData((prevFormData) => 
         ({ ...prevFormData, realName: user.displayName, email: user.email, userID: user.uid }));
         console.log(formData)
        }
      }, []);

    console.log(formData)
    

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
        setFormData((prevFormData) => ({ ...prevFormData, group: selectedOption }));
        
	};

    const navigate = useNavigate();

   

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
            
          };

        
        const handleSubmit =  async (e) => {
            e.preventDefault();
            console.log(formData)
            
            alert(`title: ${formData.userName}, text: ${formData.aboutMe}, Group: ${formData.group}, Gender ${formData.gender} Avatar: ${formData.avatar}`);
            
        };    
        const avatarHandler = (url) => {
            console.log(url)
            SetChosenAvator(url)
            setFormData((prevFormData) => ({ ...prevFormData, avatar: url }));
        }


        return (
            <div>
            <p> Choose Your Avatar: <Avatar avatarHandler={avatarHandler}/> </p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="userName">User Name:</label>
            <input type="userName" id="userName" name="userName" value={formData.title} onChange={handleChange}/>
            
            <p>Gender</p>
            <input type="radio" id="radio" name="gender" value="Male" onChange={handleChange}/>
            <label for="male">Male</label>
            <input type="radio" id="radio" name="gender" value="Female" onChange={handleChange}/>
            <label for="female">Female</label>

            <label>
			Select an option:
				<select  value={formData.group} onChange={handleDropdownChange}>
				<option  value="Networking">Networking</option>
				<option  value="Soft Dev">Soft Dev</option>
				<option  value="Cloud Engineering">Cloud Engineering</option>
                <option  value="IT Support">IT Support</option>
                <option  value="Web Design">Web Design</option>
                <option  value="Consumer Tech">Consumer Tech</option>
			</select>
		</label>
		<p>Selected option: {selectedOption}</p>

      
            <label htmlFor="aboutMe">About Me:</label>
            <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe} onChange={handleChange}/>
      
            
        
            
        <button type="submit">Submit</button>
        
          </form>
          </div>
        )
        

    }
    


export default RegPage