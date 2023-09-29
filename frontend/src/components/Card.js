import { Link } from "react-router-dom"
import './card.css'



const Card = ({blog}) => {
   
    
    
    

    return (
        <div className='card_item'>
            <div className="card_top">
                 <div className="card-img-top"> <img src={blog.image} alt="BlogImage" height="100" width="auto" ></img>{/*blog.image*/}</div>

                 <div className="subjectGroup"><p>{blog.group}</p>{/**/}</div> 
                
                {/* <img className='card_img' src={blog.} alt="" /> */}
            </div>

            <div className="detail-box">
                <h1>{blog.title}</h1>
            <div className="cardText">{blog.text}</div>
           
            
            </div>
            < div className="card-bottom">
                

               <div className="display-profile-card">
            <img src={blog.avatar}></img>

            <div className="useInfo">{blog.userName}</div>
            </div>
              


               <div className="tags-cards"><p>#Computing</p>
               {/* { ? toUpdateComms.map((toUpdateComms, index) => <div className="textLine">
                    {toUpdateComms.comment}

                </div>) : <p>Loading...</p>} */}
               
               </div>
              <div className= "LinkBtn"> <Link 
                
                to={`/MoreBlogInfo/${blog._id}`}
               
            > More Info
            </Link> 
            </div>
            </div>
            
        </div>

    )
}
export default Card