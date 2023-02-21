import Navbar from "../components/navbar.js/navbar";
import HomeAdmin from "../pages/Homeadmin";

function Defaultlayout() {
    return ( 
        <div>
            <div className="nav"><Navbar/></div>
            <div className="main"><HomeAdmin/></div>
            
            
        </div>
     );
}

export default Defaultlayout;