
import './card.css'

import profileCard from './profileCard.css'

const UsersCard = ({user}) => {
    
    

    return (
        <div className='card_item'>



            <div className="av">
                 <img className="imgAV" src={user.avatar}></img>

            <div className="useName">{user.userName}</div>
</div>
                 
                
                {/* <img className='card_img' src={blog.} alt="" /> */}
            

            <div className="detail-box avAoutMe">
                <h1>About Me</h1>
            <div className="cardText">{user.aboutMe}</div>
           
            
            </div>
            
                

               
           
         
              


             
              
            </div>
           
            
       

    )
}
export default UsersCard