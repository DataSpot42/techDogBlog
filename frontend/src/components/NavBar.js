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

<<<<<<< HEAD
                        
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
=======
                        <div className='nav-btns'> 
                        <li className="SearchBar"><SearchBar /> </li>
                        </div>
                        <Link to='/ShowAllBLogs'>Show Blogs</Link>
                        <Link to='/CreateBlog'>CreateBlog</Link>
                        <Link to='/RegPage'>Register</Link>

                        <div className='flex justify-between bg-gray-200 w-full p-4'>
                            <h6 className='text-center text-2xl font-bold'>
                                Firebase GoogleAuth
                            </h6>
>>>>>>> upstream/main
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