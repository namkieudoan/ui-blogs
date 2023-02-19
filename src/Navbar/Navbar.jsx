import { Link } from 'react-router-dom';
import "./index.css"

function Navbar() {
  return (
    <div className='navbar'>
        <Link to ="/"> Home</Link>
        <Link to ="/category"> Category</Link>
        <Link to ="/favorites"> Favorites</Link>
    </div>
  )
}
export default Navbar;