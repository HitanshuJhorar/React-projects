import "./Footer.css";
import { Share2, Heart, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-col">
          <h2 className="footer-logo">LUXE<span>.</span></h2>

          <p className="footer-desc">
            A modern dining destination for the visually driven generation.
            Crafting memories through taste and design.
          </p>

          <div className="footer-icons">
            <Share2 size={18} />
            <Heart size={18} />
            <Camera size={18} />
          </div>
        </div>

        {/* HOURS */}
        <div className="footer-col">
          <h4 className="footer-heading">HOURS</h4>

          <div className="footer-row">
            <span>Mon — Thu</span>
            <span>17:00 — 23:00</span>
          </div>

          <div className="footer-row highlight">
            <span>Fri — Sat</span>
            <span>17:00 — 01:00</span>
          </div>

          <div className="footer-row">
            <span>Sunday</span>
            <span>11:00 — 22:00</span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="footer-col">
          <h4 className="footer-heading">LOCATION</h4>

          <p>888 Design District</p>
          <p>New York, NY 10013</p>

          <p className="footer-phone">+1 (212) 555-0198</p>
          <p className="footer-email">hello@luxe-dining.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2024 LUXE RESTAURANT GROUP. ALL RIGHTS RESERVED.</p>

        <div className="footer-links">
          <span>PRIVACY POLICY</span>
          <span>ACCESSIBILITY</span>
        </div>
      </div>

    </footer>
  );
}