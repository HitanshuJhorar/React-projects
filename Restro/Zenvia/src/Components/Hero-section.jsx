import "./Hero-section.css";
import { scroller } from "react-scroll";

export default function HeroSection() {
  return (
    <section>
      <div className="Hero-container" id="hero">
        <div className="hero-text">
          <h3 className="hero-quote">Modern Culinary Arts</h3>
          <div className="hero-star">
            <h1 className="hero-star-text">The Night</h1>
            <h1 className="hero-star-text-red">Awakens</h1>
            <h1 className="hero-star-text">Your Table</h1>
            <h1 className="hero-star-text">Awaits.</h1>
          </div>
          <p className="hero-para">
            An elevated journey where every sense is ignited. Refined tastes,
            captivating ambiance. Pure indulgence.
          </p>

          <button className="btn-primary-hero" onClick={() => navigate("/booking")}>
            Reserve Your Table
          </button>
          <button
            className="btn-Secondary"
            onClick={() =>
              scroller.scrollTo("menu", {
                smooth: true,
                duration: 400,
              })
            }
          >
            Explore Menu
          </button>
        </div>
        <div className="hero-img">
          <img src="\public\hero-img.png" alt="Restro image" />
        </div>
      </div>
    </section>
  );
}
