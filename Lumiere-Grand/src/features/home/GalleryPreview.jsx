import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/common/SectionHeading";
import { galleryImages } from "../../data/homeContent";
import { staggerContainer, subtleReveal } from "../../utils/motion";

function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const resumeTimer = useRef(null);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
      }
    };
  }, []);

  const pauseAutoplay = () => {
    setIsPaused(true);
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }
    resumeTimer.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? 0;
    pauseAutoplay();
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const delta = touchStartX.current - touchEndX;

    if (Math.abs(delta) > 40) {
      setActiveIndex((current) => {
        if (delta > 0) return (current + 1) % galleryImages.length;
        return (current - 1 + galleryImages.length) % galleryImages.length;
      });
    }
  };

  return (
    <section className="px-4 pb-16 md:px-10 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-[1320px] text-center">
        <SectionHeading
          title="A Glimpse of Grandeur"
          description="Explore the stunning spaces that make our property a true masterpiece."
        />

        <div
          className="mt-10 md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-[18px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryImages[activeIndex]}
                src={galleryImages[activeIndex]}
                alt={`Gallery preview ${activeIndex + 1}`}
                loading="lazy"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="h-[320px] w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,11,11,0.26))]" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  pauseAutoplay();
                }}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-[#d98c8c]" : "w-2.5 bg-[#ddd8d5]"
                }`}
                aria-label={`Go to gallery image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 hidden gap-4 sm:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              variants={subtleReveal}
              className="group relative overflow-hidden rounded-[10px]"
            >
              <motion.img
                src={image}
                alt={`Gallery preview ${index + 1}`}
                loading="lazy"
                className="h-[170px] w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.55 }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,11,11,0.35))] opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <Button as={Link} to="/gallery" variant="outline" className="px-10">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
