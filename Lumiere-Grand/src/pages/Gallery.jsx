import { motion } from "framer-motion";
import { useState } from "react";
import DesignDetails from "../features/gallery/DesignDetails";
import FilterTabs from "../features/gallery/FilterTabs";
import GalleryGrid from "../features/gallery/GalleryGrid";
import GalleryHero from "../features/gallery/GalleryHero";
import VideoSection from "../features/gallery/VideoSection";
import CTASection from "../features/rooms/CTASection";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (nextFilter) => {
    setActiveFilter(nextFilter);
  };

  return (
    <motion.div
      key="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden bg-[#F8F6F3]"
    >
      <GalleryHero />
      <FilterTabs activeFilter={activeFilter} onChange={handleFilterChange} />
      <GalleryGrid activeFilter={activeFilter} />
      <CTASection
        title="Plan a Curated Visit"
        description="Our concierge can help you turn inspiration into a tailored stay, from suite selection to private dining and wellness reservations."
        buttonLabel="Contact Concierge Directly"
      />
      <VideoSection />
      <DesignDetails />
    </motion.div>
  );
}

export default Gallery;
