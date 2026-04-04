import { useFeature } from "../Context/featureContext";
import "./Features-section.css";
export default function FeaturesSection() {
  const { featureData } = useFeature();

  if (!featureData) return null;

  return (
    <div className="features-container" id="experience">
        <div className="features-container-inner">

      {featureData.map((item) => (
        <div className="feature-card" key={item.id}>
          <div className="icon">
            <img src={item.icon} alt={item.title} />
          </div>

          <h2 className="feature-title">{item.title}</h2>
          <p className="feature-desc">{item.desc}</p>
        </div>
      ))}
        </div>
    </div>
  );
}