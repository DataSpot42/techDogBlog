import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <div> 
            <header>
                
                    
                   
                    <div>
                    <Link  to='/'>
                        Home
                  
                    </Link>
                
                </div>
                
                <div className='navBar'>
                     <Link  to='/Login'>
                        Login
                  
                    </Link>
                    
        </div>
                   
                    

            </header>
        </div>
    )
}

export default Navbar