import { Link } from 'react-router-dom'
import Logo from './images/logo.png'
import { RiLoginBoxFill } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
import './navBar.css'
import { UserAuth } from './AuthContext';
import SearchBar from './Search.js'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { readUsers } from '../api/readUsers'
import { checkUsers } from '../api/checkUsers'

 

const Navbar = () => {       
    const [searchTrue, setSearchTrue] = useState(false);
    const [myID,setMyID] = useState()
    const [users,setUsers] = useState([])
    const navigate = useNavigate();
    const { user, logOut } = UserAuth();
    const [found,setFound] = useState(false)
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
    

  

    const search = () => {

      setSearchTrue(!searchTrue);

    };

    const handlerHome = () => {
        
        navigate(`/`)}
   

    return (

        <div>

            <header>

                <div className='nav-wrap'>

                    <ul className="nav">

                        <li><button onClick = {()=> handlerHome()}> <img className="logo" src={Logo} ></img> </button> </li>

                        

                        <div className='nav-btns'>

                        {/* view search bar */}

                            {  searchTrue &&

                             <li className="SearchBar"><SearchBar /> </li>

}

                            <li onClick={search} className="button2 button"><TbListSearch /></li>

                         

 

                           

                            {user?.displayName ? (

                                <button className="button1 button " onClick={handleSignOut}><RiLoginBoxFill /></button>

                            ) : (

                               <li className="button1 button"> <Link to='/signin'><RiLoginBoxFill /></Link></li>

                            )}

                        </div>  

                    </ul>
<div className='nn'>
                        <Link to='/ShowAllBLogs' className = "show"><span className='linkN'> Show Blogs</span></Link>

                        <Link to='/ShowMyBlogs' className = "show"><span className='linkN'>My Blogs</span></Link>

                        <Link to='/CreateBlog' className = "create"><span className='linkN'>CreateBlog</span></Link>

                        <Link to='/ShowProfile' className = "uses"><span className='linkN'> Users </span></Link> 
                      <Link to='/RegPage' className = "reg"><span className='linkN'> Register/Update</span></Link> 
                      </div>
                </div>

 

 

 

 

            </header>

        </div>

    )

}

 

 

export default Navbar