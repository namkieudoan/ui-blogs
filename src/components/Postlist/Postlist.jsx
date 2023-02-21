import { Link } from "react-router-dom";
import "./styles.css";

function Postlist(props) {
    const {getIDPost, postList} = props;
    const handleGetId = (id)=>{
        getIDPost(id);
    }
    return (
        <ul>
            {postList.map((item,id) => {
               return (
                <li key={id} className="post-item">
                    <img className="post-image" src={item.images} alt={item.title}/>
                    <div className="post-content">
                        <span className="post-category"> Category: ${item.category} </span>
                        <span className="post-title" onClick={()=>handleGetId(item._id)}><Link to={`http://localhost:3000/${item._id}`}><h2>{item.title}</h2></Link></span>
                        {/* <p className="post-content">{item.content}</p> */}
                        <button onClick={()=>handleGetId(item._id)}><Link to={`http://localhost:3000/${item._id}`}>Reading</Link></button>
                    </div>
                </li> 
               )
            })}
        </ul> 
     );
}

export default Postlist;