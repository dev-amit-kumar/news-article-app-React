import { Link } from 'react-router-dom'
import '../css/Header.css'
const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/"><span className="navbar-brand">Go News App</span></Link>
            <button className="btn" style={{backgroundColor: 'black', color: 'white',float: 'right', marginTop:'10px'}} type="submit">Gallery</button>
        </nav>
    )
}
export default Navbar