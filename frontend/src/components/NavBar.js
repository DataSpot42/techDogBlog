import { Link } from 'react-router-dom'
import Logo from './images/logo.png'
import { RiLoginBoxFill } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
import './navBar.css'

import { UserAuth } from './AuthContext';

import SearchBar from './Search.js'




const Navbar = () => {

    const { user, logOut } = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div>
            <header>
                <div className='nav-wrap'>
                    <ul className="nav">
                        <li><img className="logo" src={Logo} ></img> </li>

                        <div className='flex justify-between bg-gray-200 w-full p-4'>
                            <h1 className='text-center text-2xl font-bold'>
                                Firebase Google Auth & Context
                            </h1>
                            {user?.displayName ? (
                                <button onClick={handleSignOut}>Logout</button>
                            ) : (
                                <Link to='/signin'>Sign in</Link>
                            )}
                        </div>
                      
                        <div className='nav-btns'> 
                        <li className="SearchBar"><SearchBar /> </li>

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