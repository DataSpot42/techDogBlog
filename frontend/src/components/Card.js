import { Link } from "react-router-dom"
import './card.css'
import Profile from './images/profile.png'
const Card = ({blog}) => {
    console.log(blog)
    

    return (
        <div className='card_item'>
            <div className="card_top">
                 <div> IMAGE{/*blog.image*/}</div>

                 <div className="subjectGroup">{/**/ }</div> 
                
                {/* <img className='card_img' src={blog.} alt="" /> */}
            </div>

            <div className="detail-box">
                <p>Title: {/*blog.title*/}</p>
            <div className="stylehere">TEXT:{/*blog.text*/}</div>
           
            
            </div>
            < div className="card-bottom">
               <div className="display-profile-card">
            <img src={Profile}></img>
               </div>
               <div className="tags-cards"></div>
            </div>
            
        </div>

    )
}
export default Card