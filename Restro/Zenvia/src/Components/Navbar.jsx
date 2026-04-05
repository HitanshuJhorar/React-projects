import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect,useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
  function handleClickOutside(e) {
    if (!menuRef.current) return;

    // agar click menu ke andar hai → kuch mat kar
    if (menuRef.current.contains(e.target)) return;

    // warna close
    setMenuOpen(false);
  }

  if (menuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuOpen]);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [menuOpen]);

  return (
    <nav className="Navbar-container">
      {/* LOGO */}
      <div className="nav-logo">
        {isHome ? (
          <ScrollLink to="hero" className="logo">
            ZENVIA
          </ScrollLink>
        ) : (
          <span className="logo" onClick={() => navigate("/")}>
            ZENVIA
          </span>
        )}
      </div>

      {/* 🍔 HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* LINKS */}
      <div  ref={menuRef} className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* CLOSE BUTTON (TOP RIGHT) */}
        <div className="mobile-top">
          <span className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="mobile-links">
          {isHome ? (
            <>
              <ScrollLink
                to="our-story"
                className="links"
                onClick={() => setMenuOpen(false)}
              >
                OUR STORY
              </ScrollLink>
              <ScrollLink
                to="menu"
                className="links"
                onClick={() => setMenuOpen(false)}
              >
                MENU
              </ScrollLink>
              <ScrollLink
                to="experience"
                className="links"
                onClick={() => setMenuOpen(false)}
              >
                EXPERIENCE
              </ScrollLink>
              <ScrollLink
                to="reviews"
                className="links"
                onClick={() => setMenuOpen(false)}
              >
                REVIEWS
              </ScrollLink>
            </>
          ) : (
            <span
              className="links"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            >
              HOME
            </span>
          )}
        </div>

        {/* CTA BUTTON (BOTTOM FIXED FEEL) */}
        <div className="mobile-bottom">
          <button
            className="btn-primary mobile-btn"
            onClick={() => {
              navigate("/booking");
              setMenuOpen(false);
            }}
          >
            RESERVE YOUR TABLE
          </button>
        </div>
      </div>

      {/* DESKTOP BUTTON */}
      <div className="nav-btn">
        <button className="btn-primary" onClick={() => navigate("/booking")}>
          RESERVE YOUR TABLE
        </button>
      </div>
    </nav>
  );
}
