import Postlist from "../../components/Postlist/Postlist";
import "./index.css"

function Home(props) {
    const {postList, getIDPost} = props;
    return (
        <div className="wrapper">
             <h1 className="home-title"> 😺 Wellcome to ours Home 😺 </h1>
            <div className="container">
                <Postlist postList={postList} getIDPost={getIDPost} />
            </div>
        </div>
     );
}

export default Home;