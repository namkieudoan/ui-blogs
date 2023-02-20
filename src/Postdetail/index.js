function Postdetail(props) {
    console.log(props);
    const {_id,title,content,images} = props.postItem;
    return (
        <div id={_id} style={{textAlign:'center'}} className="post-detail">
            <div> {title}</div>
            <p>{content}</p>
            <img src={images} alt={title} />
        </div>
    );
}

export default Postdetail;