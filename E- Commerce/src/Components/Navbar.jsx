import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from "../Context/useAuth";

export default function Navbar(){
    const{user,logout}=useAuth();
    return <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-brand">
                <img src="/nav-logo.png" alt="EcoStore" className="navbar-logo" />
            </Link>

            <ul className='navbar-menu'>
            <Link to={"/"} className='navbar-link'>Home</Link>
            <Link to={"/checkout"} className='navbar-link'>Cart</Link>
            </ul>

           {!user? (<ul className='navbar-auth-links'>
            <Link to={"/auth"} className='navbar-auth-link login'>Login</Link>
            <Link to={"/auth"} className='navbar-auth-link signup'>SignUp</Link>
            </ul>): 
            (<ul className='navbar-user'>
                <span className='navbar-greeting'>hello,{user.email}</span>
                <button className='btn btn-secondary' onClick={logout}>Logout</button>
            </ul>)
            }
        </div>
    </nav>
}
