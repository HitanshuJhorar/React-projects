import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    let frameId = 0;

    const scrollToSection = (sectionId, attemptsRemaining = 24) => {
      const targetNode = document.getElementById(sectionId);

      if (targetNode && targetNode.isConnected) {
        targetNode.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (attemptsRemaining <= 0) return;

      frameId = requestAnimationFrame(() => {
        scrollToSection(sectionId, attemptsRemaining - 1);
      });
    };

    frameId = requestAnimationFrame(() => {
      const sectionId =
        location.state?.scrollTo ?? location.hash.replace("#", "");

      if (sectionId) {
        scrollToSection(sectionId);
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => cancelAnimationFrame(frameId);
  }, [location.pathname, location.hash, location.state?.scrollTo]);

  return null;
}

export default ScrollManager;
