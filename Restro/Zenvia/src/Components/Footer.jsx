
import "./Footer.css";
import { FaShareAlt, FaHeart, FaCamera } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT */}
        <div className="footer-left">
          <h2 className="logo">ZENVIA<span>.</span></h2>
          <p>
            A modern dining destination for the visually driven generation.
            Crafting memories through taste and design.
          </p>

          <div className="icons">
            <FaShareAlt />
            <FaHeart />
            <FaCamera />
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>HOURS</h4>
          <div className="hours">
            <p><span>Mon — Thu</span> <span>17:00 — 23:00</span></p>
            <p><strong>Fri — Sat</strong> <strong>17:00 — 01:00</strong></p>
            <p><span>Sunday</span> <span>11:00 — 22:00</span></p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>LOCATION</h4>
          <p>888 Design District</p>
          <p>DELHI</p>
          <p className="highlight">+91 xxxxxxxxx</p>
          <p>hello@ZENVIA-dining.com</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 ZENVIA RESTAURANT GROUP. ALL RIGHTS RESERVED.</p>
        <div className="footer-links">
          <span>PRIVACY POLICY</span>
          <span>ACCESSIBILITY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;