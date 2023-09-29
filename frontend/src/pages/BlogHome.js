import './hPage.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  console.log(HomePage)
  const navigate = useNavigate();
  const handlerLogin = () => {
        
    navigate(`/signin`)}

  return (
    <div className='container'>
   

      <div className="bg">
        <div className='hidden'>blank</div>
        <div className='titleH'><p>WELCOME TO TECHDOG</p> </div>

        <div className='btn-block'>
 <button onClick = {()=> handlerLogin()} className='login-btn'>Login</button>
 </div>
      </div>
     
    </div>
  );
}

export default HomePage
