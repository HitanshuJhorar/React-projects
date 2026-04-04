import { useState,useEffect } from "react";
import { useMenu } from "../Context/MenuContext";
import "./Featured-section.css"

export default function FeaturedSection() {
  const { MenuData } = useMenu();
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    MenuData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [MenuData]);

  const visibleitems = showAll ? MenuData : MenuData.slice(0, 3);

  return (
    <div className="featured-container" id="menu">
      <h3 className="featured-sub-title">SIGNATURE SERIES</h3>
      <h1 className="featured-title">Featured Dishes</h1>
      <div className="menu-container">
        {visibleitems.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" loading="lazy" className="menu-dish-image" />
            <div className="menu-dish-content">
              <h3 className="menu-dish-name">{item.name}</h3>
              <p className="menu-dish-desc">{item.desc}</p>
              <span className="menu-dish-price">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
        {!showAll? (
          <div className="btn"><button className="btn-secondary" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? "Show Less" : "View Full Menu"}
          </button></div>) :(
          <div className="btn" ><button className="btn-secondary" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? "Show Less" : "View Full Menu"}
          </button></div>)}
    </div>
  );
}
