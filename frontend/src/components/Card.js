import { Link } from "react-router-dom"

const Card = ({ blog }) => {

    return (
        <div className='card_item'>
            <div className="card_inner">
                <p>Title: {blog.title}</p>
                {/* <img className='card_img' src={blog.} alt="" /> */}
            </div>
            <div className="detail-box">
            <div className="stylehere">{blog.title}</div>
            <div>{blog.text}</div>
            
            </div>
            
            
        </div>

    )
}
export default Card