import "./CTA-section.css"
import { useNavigate } from "react-router-dom";

export default function CTASection() {
    const navigate = useNavigate();
  return (
    <div className="cta-section"><div className="cta-container">
      <h1 className="cta-title">
        Claim Your Evening.<br />Reserve Now.
      </h1>

      <p className="cta-para">
        Experience our culinary artistry firsthand. Limited tables remain for upcoming dates.
      </p>

      <button onClick={() => navigate("/booking")} className="cta-btn">RESERVE YOUR TABLE</button>

      <span className="cta-span">BESPOKE TABLE SERVICE INCLUDED</span>
    </div>
    </div>
  );
}