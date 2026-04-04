import { createContext, useContext } from "react";

const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  const featureData = [
  {
    id: 1,
    icon: "https://cdn.jsdelivr.net/npm/lucide-static/icons/wine.svg",
    title: "Rare Vintages. Perfect Pairings.",
    desc: "A hand-picked selection of organic and biodynamic wines from independent growers worldwide.",
  },
  {
    id: 2,
    icon: "https://cdn.jsdelivr.net/npm/lucide-static/icons/utensils.svg",
    title: "Culinary Theater. Close Encounters.",
    desc: "Immersive dining experiences with direct view of our open kitchen theater and chef interaction.",
  },
  {
    id: 3,
    icon: "https://cdn.jsdelivr.net/npm/lucide-static/icons/leaf.svg",
    title: "Pure Source. Zero Waste.",
    desc: "Dedicated to a sustainable future with compostable practices and hyper-local ingredient sourcing.",
  },
];

  return (
    <FeatureContext.Provider value={{ featureData }}>
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeature = () => useContext(FeatureContext);