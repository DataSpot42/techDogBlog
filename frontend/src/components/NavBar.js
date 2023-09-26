import { Link } from 'react-router-dom'

import Logo from './images/logo.png'

import { RiLoginBoxFill } from 'react-icons/ri'

import { TbListSearch } from 'react-icons/tb'

import './navBar.css'

import { UserAuth } from './AuthContext';

import SearchBar from './Search.js'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

 

 

 

const Navbar = () => {
    const navigate = useNavigate();
 

    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {

        try {

            await logOut()

        } catch (error) {

            console.log(error)

        }

    }

    const [searchTrue, setSearchTrue] = useState(false);

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

 

                       

                        <Link to='/ShowAllBLogs' className = "show">Show Blogs</Link>

                        <Link to='/CreateBlog' className = "create">CreateBlog</Link>

                        <Link to='/RegPage' className = "reg">Register</Link>

 

                        <div className='nav-btns'>

                        {/* view search bar */}

                       

                            {  searchTrue &&

                             <li className="SearchBar"><SearchBar /> </li>

}

                            <li onClick={search} className="button2 button"><TbListSearch /></li>

                         

 

                            {/* login */}

                            {user?.displayName ? (

                                <button className="button1 button " onClick={handleSignOut}><RiLoginBoxFill /></button>

                            ) : (

                               <li className="button1 button"> <Link to='/signin'><RiLoginBoxFill /></Link></li>

                            )}

                        </div>  

                    </ul>

                </div>

 

 

 

 

            </header>

        </div>

    )

}

 

 

export default Navbar