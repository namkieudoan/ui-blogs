import Postitem from "./Postitem";

function Postlist({postList}) {
    return (
        <ul>
            {postList.map((item,id) => {
               return (
                <Postitem id={item.id} title={item.title} content={item.content} images={item.image} /> 
               )
            })}
        </ul> 
     );
}

export default Postlist;