import './HomePage.css'

function HomePage() {
    return (
     <div>
     <nav> 
      <ul>
      <li id="logo"><img src="logo.png"></img></li> 

       <div class="icon">
          <li id="login-icon"><img src="icons8-home-250.png"/> </li>
              <li id="home-icon"><img src="icons8-authentication-240.png"/></li>
          </div>
          </ul>
  </nav>
  <div class="grid-wrap">
<h2> Welcome to TechDog, here we are</h2>

  </div>
  </div>
    );
  }

export default HomePage
