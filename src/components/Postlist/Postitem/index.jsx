import "./styles.css";

function Postitem({id,title,content,images}) {
    return ( 
        <li key={id} className="post-item">
            <h2>{title}</h2>
            <span>{content}</span>
            <img src={images} alt={title}/>
        </li>
     );
}

export default Postitem;