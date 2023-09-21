import './homePage.css'
import Logo from '../components/images/logo.png'
function HomePage() {
    return (
     <div>
      <div className="top">
           <img className = "logo" src = {Logo} ></img>
           <h1> WELCOME TO TECHDOG</h1>
           <div className = "button">
         <p className = "button1"> login </p>
         <p className= "button2"> signup</p>
         </div>
      </div>
      
        <p className = "bg">
           </p>
           
     <nav> 
      <ul>
      

       <div class="icon">
          <li id="login-icon"><img src="icons8-home-250.png"/> </li>
              <li id="home-icon"><img src="icons8-authentication-240.png"/></li>
          </div>
          </ul>
  </nav>
 


  
  </div>
    );
  }

export default HomePage
