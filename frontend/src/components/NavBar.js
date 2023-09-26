import { Link } from 'react-router-dom'
import Logo from './images/logo.png'
import { RiLoginBoxFill } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
import './navBar.css'
import { UserAuth } from './AuthContext';
import SearchBar from './Search.js'
import { useState } from 'react'



const Navbar = () => {

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
    
    return (
        <div>
            <header>
                <div className='nav-wrap'>
                    <ul className="nav">
                        <li><img className="logo" src={Logo} ></img> </li>

                        
                        <Link to='/ShowAllBLogs'>Show Blogs</Link>
                        <Link to='/CreateBlog'>CreateBlog</Link>
                        <Link to='/RegPage'>Register</Link>

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