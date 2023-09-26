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

                        
                        <Link to='/ShowAllBLogs' className = "show"> Show Blogs</Link>
                        <Link to='/CreateBlog' className = "create"> CreateBlog</Link>
                        <Link to='/RegPage' className='reg'> Register</Link>
                        
                        <div className='nav-btns'>
                        {/* view search bar */}
                        
                            {  searchTrue &&
                             <li className="SearchBar"><SearchBar /> </li>
}
                            <li onClick={search} className="button2"><TbListSearch /></li>
                          
  
                            {/* login */}

                            {user?.displayName ? (
                                <button onClick={handleSignOut}>Logout</button>
                            ) : (
                                <Link to='/signin'>Sign in</Link>
                            )}
                        </div>
                        <div className='nav-btns'>

                            <li className="button2 button">    <TbListSearch /></li>
                            <li className="button1 button"> <RiLoginBoxFill />

                            </li>
                        </div>
                    </ul>
                </div>




            </header>
        </div>
    )
}


export default Navbar