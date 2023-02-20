import { Link } from "react-router-dom";

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
                    <span > Category: ${item.category} </span>
                    <span onClick={()=>handleGetId(item._id)}><Link to={`http://localhost:3000/${item._id}`}><h2>{item.title}</h2></Link></span>
                    <img src={item.images} alt={item.title}/>
                </li> 
               )
            })}
        </ul> 
     );
}

export default Postlist;