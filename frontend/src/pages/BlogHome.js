import './homePage.css'


function HomePage() {
    return (
     <div>
     <nav> 
      <ul>
      <li id="logo"><img src="techdoglogo.png" alt="logo"></img></li> 

       <div class="icon">
          <li id="login-icon"><img src="./techdoglogo.png" alt="logo"></img> </li>
              <li id="home-icon"><img src="../frontend/src/pages/techdoglogo.png" alt="logo"  width="50" height="60"/></li>
          </div>
          </ul>
  </nav>
  <div class="grid-wrap">
<h2> Welcome to TechDog here</h2>

  </div>
  </div>
    );
  }

export default HomePage
