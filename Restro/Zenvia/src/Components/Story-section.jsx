import "./Story-section.css";

export default function StorySection() {
  return (
    <div className="story-container" id="our-story">

  <div className="story-img">
    <img src="/Our-story.png" alt="Our Story" />
  </div>

  <div className="story-text">
    <div className="story-heading">
      <h1 className="story-title">Where Design</h1>
      <h1 className="story-title-red">Meets Flavor</h1>
    </div>

    <div className="story-content">
      <p>LUXE crafts more than meals. We orchestrate moments.</p>
      <p>Each dish a narrative, every space designed for discovery.</p>
      <p>For the discerning generation, we redefine modern dining.</p>
      <p>Expect vibrant essence. Experience elevated atmosphere.</p>
    </div>

    <button className="story-btn">
      Learn More 
      <span className="arrow">→</span>
    </button>
  </div>

</div>
  );
}
