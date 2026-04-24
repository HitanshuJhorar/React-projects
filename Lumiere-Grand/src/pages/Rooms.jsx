import { useState } from "react";
import Amenities from "../features/rooms/Amenities";
import CTASection from "../features/rooms/CTASection";
import FilterTabs from "../features/rooms/FilterTabs";
import RoomsGrid from "../features/rooms/RoomsGrid";
import RoomsHero from "../features/rooms/RoomsHero";

export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="bg-[#F8F6F3]">
      <RoomsHero />
      <FilterTabs activeFilter={activeFilter} onChange={setActiveFilter} />
      <RoomsGrid activeFilter={activeFilter} />
      <CTASection />
      <Amenities />
    </div>
  );
}
