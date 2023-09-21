import './homePage.css'
import '../'


function HomePage() {
    return (
     <div>
      <div className="top">
           <img id = "logo" src="logo.png"></img>
           <h1> WELCOME TO TECHDOG</h1>
        
      </div>
      
        <p className = "bg">
           </p>
           
     <nav> 
      <ul>


       <div class="icon">
          <li id="login-icon"><img src="./techdoglogo.png" alt="logo"></img> </li>
              <li id="home-icon"><img src="../frontend/src/pages/techdoglogo.png" alt="logo"  width="50" height="60"/></li>
          </div>
          </ul>
  </nav>



  
  </div>
    );
  }

export default HomePage
