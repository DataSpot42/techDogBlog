import Avatar from './Avatar.js'
import { useState, useEffect } from "react"
import { addBlog } from "../api/addBlog"
import { UserAuth } from '../components/AuthContext';
import { useNavigate } from "react-router-dom"
import '../components/reg.css'
import { readUsers } from '../api/readUsers.js';
import { NewUser } from '../components/newUser.js';
import { UpdateUser } from '../components/updateUser.js';
import { addUser } from '../api/addUser.js';
import { editUser } from '../api/editUser.js'
import logo1 from '../components/images/techreg.png'
import { checkUsers } from '../api/checkUsers.js';

const RegPage = () => {
    const [users,setUsers] = useState()
    const { logOut, user } = UserAuth();
    console.log(user)
    const [chosenAvatar,SetChosenAvator] = useState("")
    
    const [found,setFound] = useState(false)
    /* const [user, setUser] = useState([]); */
    const [formData, setFormData] = useState(
        {userName: "",aboutMe: "", realName: "", email: "", userID: ""});
    const [selectedOption, setSelectedOption] = useState("Select");
    let myID=0  


    
    

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
            
            setFormData((prevFormData) => 
            ({ ...prevFormData, realName: user.displayName, email: user.email, userID: user.uid }));
            console.log(formData)
            let myID=""
            console.log(formData)
            checkUsers(user, formData)    
            console.log(users)
            if (users){
            console.log(users)    
            
           
            
        }
            
            alert(`title: ${formData.userName}, text: ${formData.aboutMe},  
             Avatar: ${formData.avatar} ${found} ${myID}` );
            
        };    
        const avatarHandler = (url) => {
            function diffImage(img) {
                if(img.src.match()) img.src = "../components/images/black.jpg";
                else img.src = "blank.jpg";
                }
            console.log(url)
            SetChosenAvator(url)
            setFormData((prevFormData) => ({ ...prevFormData, avatar: url }));
            console.log(formData)
        }

        if(!user) return <h1>Loading</h1>
        return (
            
            <div className = "regPage">
              
            <p className = "Avatar" > Choose Your Avatar <Avatar avatarHandler={avatarHandler}/> </p>
            <div className = "format">
                <div className ="1">
                    <img className = "dog" src = {logo1} alt = "techreg"></img>
                </div>
                
                <form onSubmit={handleSubmit}>
            <label htmlFor="userName">User Name<p></p> </label>
            
            <input type="userName" id="userName" name="userName" value={formData.title} onChange={handleChange}/>
            
            <p></p>
           
		
            <p></p>
      
            <label htmlFor="aboutMe">About Me</label>
            <p></p>
            <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe} onChange={handleChange}/>
      
            
        
           <p></p> 
        <button className = "submit" type="submit" href= 'https://www.epicurrence.com/' target= "blank">Submit</button>
        
        
          </form>
          <div className ="3">
                    <img className = "dog2" src = {logo1} alt = "techreg"></img>
                </div>
          
          </div>
          
          </div>
        )
        

    }
    


export default RegPage