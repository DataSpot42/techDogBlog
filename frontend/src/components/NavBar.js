import { Link } from 'react-router-dom'
import Logo from './images/logo.png'
import { RiLoginBoxFill } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
import './navBar.css'
import { useState } from "react"






const Navbar = () => {
    const [searchOn, setsearchOn] = useState(true)
    return (
        <div>
            <header>
                <div className='nav-wrap'>
                    <ul className="nav">
                        <li><img className="logo" src={Logo} ></img> </li>
                        <div className='nav-btns'>
                            {searchOn && (
                            <li onClick={() => setsearchOn(!searchOn)} className="button2 button">    <TbListSearch /></li>
                            )}
                            <li> </li>

                            <li  className="button1 button"> <RiLoginBoxFill />

                            </li>
                        </div>
                    </ul>
                </div>
                
              
                    

            </header>
        </div>
    )
}

export default Navbar