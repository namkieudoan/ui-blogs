import Postlist from "../Postlist/Postlist";
import "./index.css"

function Home({postList}) {
    return (
        <div className="wrapper">
             <h1 className="home-title"> 😺 Wellcome to ours Home 😺 </h1>
            <div className="container">
                <Postlist postList={postList}/>
            </div>
        </div>
     );
}

export default Home;