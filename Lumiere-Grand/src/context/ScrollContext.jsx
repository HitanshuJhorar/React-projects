import { useRef, useState } from "react";
import ScrollContext from "./scroll-context";

export function ScrollProvider({ children }) {
  const homeHeroRef = useRef(null);
  const amenitiesRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  return (
    <ScrollContext.Provider
      value={{
        homeHeroRef,
        amenitiesRef,
        aboutRef,
        testimonialsRef,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
