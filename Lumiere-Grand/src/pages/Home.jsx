import Hero from "../features/home/Hero";
import RoomsPreview from "../features/home/RoomsPreview";
import Amenities from "../features/home/Amenities";
import About from "../features/home/About";
import GalleryPreview from "../features/home/GalleryPreview";
import Testimonials from "../features/home/Testimonials";
import CTA from "../features/home/CTA";
import { useEffect } from "react";
import { useScrollContext } from "../hooks/useScrollContext";

function Home() {
  const {
    homeHeroRef,
    amenitiesRef,
    aboutRef,
    testimonialsRef,
    setActiveSection,
  } = useScrollContext();

  useEffect(() => {
    const sections = [
      { id: "home-hero", ref: homeHeroRef },
      { id: "amenities", ref: amenitiesRef },
      { id: "about", ref: aboutRef },
      { id: "testimonials", ref: testimonialsRef },
    ];

    const idMap = new Map(
      sections
        .filter(({ ref }) => ref.current)
        .map(({ id, ref }) => [ref.current, id]),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) return;
        
        const targetElement = visibleEntries[0].target;
        const sectionId = idMap.get(targetElement);
        if (sectionId) setActiveSection(sectionId);
      },
      {
        rootMargin: "-22% 0px -52% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [homeHeroRef, amenitiesRef, aboutRef, testimonialsRef, setActiveSection]);

  return (
    <div className="bg-[#f6f1ec]">
      <div className="w-full overflow-hidden bg-[#f9f6f2]">
        <div ref={homeHeroRef}>
          <Hero />
        </div>
        <RoomsPreview />
        <div ref={amenitiesRef}>
          <Amenities />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <GalleryPreview />
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <CTA />
      </div>
    </div>
  );
}

export default Home;
