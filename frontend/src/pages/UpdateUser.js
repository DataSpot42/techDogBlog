import Avatar from './Avatar.js'
import { useState, useEffect } from "react"
import { addBlog } from "../api/addBlog.js"
import { UserAuth } from '../components/AuthContext.js';
import { useNavigate } from "react-router-dom"
import '../components/reg.css'
import { readUsers } from '../api/readUsers.js';
import { NewUser } from '../components/newUser.js';
import { UpdateUser } from '../components/updateUser.js';
import { addUser } from '../api/addUser.js';
import { editUser } from '../api/editUser.js'
import logo1 from '../components/images/techreg.png'

const RegPage = () => {
    const [users,setUsers] = useState()
    const { logOut, user } = UserAuth();
    console.log(user)
    const [chosenAvatar,SetChosenAvator] = useState("")
    const [gender,SetGender] = useState("")
    const [found,setFound] = useState(false)
    /* const [user, setUser] = useState([]); */
    const [formData, setFormData] = useState(
        {userName: "",aboutMe: "", gender: "", realName: "", email: "", userID: ""});
    const [selectedOption, setSelectedOption] = useState("Select");

    /* useEffect(() => { */
        /* const items = JSON.parse(localStorage.getItem('googleUser'));
        if (items) {
         setUser(items);
         console.log(user) */
         
        
        
     /*  }, []); */
    let myID=0

    
 /*  useEffect(() => {
        const fetchData = async() => {
            let data = await readUsers(); // read blogs from database   
            setUsers(data);}
            if (!user) {
            for (let i=0; i<users.user.length; i++){
                if (users.user[i].userID === user.uid) {
                    console.log('should be true')
                    setFound(true)
                    myID = users.user[i]._id
                } else {
                    setFound(false)
                
                }}}
            



        fetchData()                
    },[user]) */

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
            setFormData((prevFormData) => 
            ({ ...prevFormData, realName: user.displayName, email: user.email, userID: user.uid }));
            console.log(formData)
            let myID=""
            /* if (!user) {
                console.log('got user')
                for (let i=0; i<users.user.length; i++){
                    if (users.user[i].userID === user.uid) {
                        console.log('should be true')
                        setFound(true)
                        myID = users.user[i]._id
                    } else {
                        setFound(false)
                    
                    }}}
             */
            /* let data = await readUsers() // read blogs from database   
            setUsers(data)               */
                
            console.log(users)
            if (users){
            console.log(users)    
            
           /*  for (let i=0; i<users.user.length; i++){
                if (users.user[i].userID === user.uid) {
                    found = true
                    myID = users.user[i]._id
                } else {
                    found = false
                
                }
            } */
            addUser(formData)
        }
            
            alert(`title: ${formData.userName}, text: ${formData.aboutMe}, Group: ${formData.group}, 
            Gender ${formData.gender} Avatar: ${formData.avatar} ${found} ${myID}` );
            
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
            <p>Gender</p>
            <input type="radio" id="radio" name="gender" value="Male" onChange={handleChange}/>
            <label for="male">Male</label>
            <input type="radio" id="radio" name="gender" value="Female" onChange={handleChange}/>
            <label for="female">Female</label>
            <p></p>
           {/* <label>
			What group aligns with you most?:
				<select  value={formData.group} onChange={handleDropdownChange}>
				<option  value="Networking">Networking</option>
				<option  value="Soft Dev">Soft Dev</option>
				<option  value="Cloud Engineering">Cloud Engineering</option>
                <option  value="IT Support">IT Support</option>
                <option  value="Web Design">Web Design</option>
                <option  value="Consumer Tech">Consumer Tech</option>
			</select>
		</label>*/ }
		
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