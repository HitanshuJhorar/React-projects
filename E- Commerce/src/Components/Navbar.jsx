import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from "../Context/useAuth";
import { useState } from 'react';

export default function Navbar(){
    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className="navbar">
        <div className="navbar-container">

            {/* Logo */}
            <Link to="/" className="navbar-brand">
                <img src="/nav-logo.png" alt="EcoStore" className="navbar-logo" />
            </Link>

            {/* Desktop Menu */}
            <ul className='navbar-menu'>
                <Link to="/" className='navbar-link'>Home</Link>
                <Link to="/checkout" className='navbar-link'>Cart</Link>
            </ul>

            {/* Auth */}
            {!user ? (
                <ul className='navbar-auth-links'>
                    <Link to="/auth" className='navbar-auth-link login'>Login</Link>
                    <Link to="/auth" className='navbar-auth-link signup'>SignUp</Link>
                </ul>
            ) : (
                <ul className='navbar-user'>
                    <span className='navbar-greeting'>hello, {user.email}</span>
                    <button className='btn btn-secondary' onClick={logout}>Logout</button>
                </ul>
            )}

            {/* Hamburger */}
            <div 
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
            <Link to="/checkout" onClick={()=>setMenuOpen(false)}>Cart</Link>

            {!user ? (
                <>
                    <Link to="/auth" onClick={()=>setMenuOpen(false)}>Login</Link>
                    <Link to="/auth" onClick={()=>setMenuOpen(false)}>SignUp</Link>
                </>
            ) : (
                <>
                    <span>{user.email}</span>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </div>
    </nav>
    );
}