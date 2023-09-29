import Avatar from './Avatar.js'
import { useState, useEffect } from "react"
import { UserAuth } from '../components/AuthContext';
import '../components/reg.css'
import logo1 from '../components/images/techreg.png'
import { checkUsers } from '../api/checkUsers.js';
import { readUsers } from '../api/readUsers.js';

const RegPage = () => {
    const [users, setUsers] = useState()
    const [allUsers, setAllUsers] = useState()
    const [welcome,setWelcome] = useState("")
    const { logOut, user } = UserAuth();
    const [posted, setPosted] = useState(0);
    const [currentUser,setCurrentUser] = useState(0);
    const [chosenAvatar, SetChosenAvator] = useState("")
    const [formData, setFormData] = useState(
        { userName: "", aboutMe: "", realName: "", email: "", userID: user.uid, avatar: "" });
    const [selectedOption, setSelectedOption] = useState("Select");
    let myID = 0
    
    useEffect(() => {
      
        const fetchUsers = async () => {
            let userData = await readUsers()  //read users from database
            let userDataUsers = userData.user            
            console.log(userDataUsers[1].userID)
            if (userDataUsers) {for (let u = 0; u<userDataUsers.length; u++){
                if (userDataUsers[u].userID === user.uid) {
                    setWelcome(`Welcome Back ${userDataUsers[u].userName}`)
                    setCurrentUser(userDataUsers[u])
                    setFormData((prevFormData) => ({ ...prevFormData, userName: userDataUsers[u].userName, aboutMe: userDataUsers[u].aboutMe }));
                    myID=1}
                    else {
                        if (myID===0){
                    setWelcome("Welcome to our Site")}
                   

                    }
                } }
                setAllUsers(userData)

            }
            
                
        fetchUsers()
    }, [])   


    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormData((prevFormData) =>
            ({ ...prevFormData, realName: user.displayName, email: user.email, userID: user.uid }));
        console.log(formData)
        let myID = ""
        console.log(formData)
        checkUsers(user, formData)
        console.log(users)
        

    };
    const avatarHandler = (url) => {
        function diffImage(img) {
            if (img.src.match()) img.src = "../components/images/black.jpg";
            else img.src = "blank.jpg";
        }

        SetChosenAvator(url)
        setFormData((prevFormData) => ({ ...prevFormData, avatar: url }));
        
    }
    
    if (!user) return <h1>Loading</h1>  //only show data if user is logged in and when user data is loaded
    return (

        <div className="regPage">
              <h1 className="Avatar">{welcome}</h1>  
              {currentUser?
              <div>
                
                <p>Current Avatar:</p><img src={currentUser.avatar} alt="techreg"></img>
                
              </div>
              
              
              : <p></p>}
            <p className="Avatar" > Choose Your Avatar <Avatar avatarHandler={avatarHandler} /> </p>
            <div className="format">
                <div className="1">
                    <img className="dog" src={logo1} alt="techreg"></img>
                </div>

                <form onSubmit={handleSubmit}>
                    
                    <p>Seleted Avatar:</p>
                    {formData.avatar ? <img src={formData.avatar} alt="Avitar"></img> :<p>Nothing Chosen</p> }
                    <p></p>
                    <label htmlFor="userName">User Name<p></p> </label>
                    <input type="userName" id="userName" name="userName" value={formData.userName} onChange={handleChange} />

                    <p></p>


                    <p></p>

                    <label htmlFor="aboutMe">About Me</label>
                    <p></p>
                    <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe} onChange={handleChange} />



                    <p></p>
                    <button className="submit" type="submit" href='https://www.epicurrence.com/' target="blank">Submit</button>


                </form>
                <div className="3">
                    <img className="dog2" src={logo1} alt="techreg"></img>
                </div>

            </div>

        </div>
    )


}



export default RegPage