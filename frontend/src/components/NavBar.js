import { Link } from 'react-router-dom'
import Logo from './images/logo.png'
import { RiLoginBoxFill } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
import './navBar.css'
import SearchBar from './Search.js'
import { UserAuth } from './AuthContext';



const Navbar = () => {
    return (
        <div>
            <header>
                <div className='nav-wrap'>
                    <ul className="nav">
                        <li><img className="logo" src={Logo} ></img> </li>
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