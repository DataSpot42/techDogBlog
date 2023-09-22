import './homePage.css'
import Logo from '../components/images/logo.png'
import { RiLoginBoxFill } from 'react-icons/ri'
import { TbListSearch } from 'react-icons/tb'
function HomePage() {


  return (
    <div className='container'>
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

      <div className="bg">
        <div className='hidden'>blank</div>
        <div className='titleH'><p>WELCOME TO TECHDOG</p> </div>
        
        <div className='btn-block'>
 <button className='login-btn'>Login</button>
 </div>
      </div>
     
    </div>
  );
}

export default HomePage
