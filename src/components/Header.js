import { Link } from 'react-router-dom'
import '../assets/css/Header.css'
const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/"><span className="navbar-brand text-white">Todo App</span></Link>
            <div>
                <button className="btn btn-dark mr-2" type="submit">Let's get started</button>
            </div>
        </nav>
    )
}
export default Navbar