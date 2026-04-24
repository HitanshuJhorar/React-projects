import { motion } from "framer-motion";
import RoomCard from "../../components/cards/RoomCard";
import SectionHeading from "../../components/common/SectionHeading";
import { roomCards } from "../../data/homeContent";
import { staggerContainer, subtleReveal } from "../../utils/motion";

function RoomsPreview() {
  return (
    <section className="px-4 pb-16 pt-40 md:px-10 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          eyebrow="Stay In Style"
          title="Exquisite Accommodations"
          description="Designed for comfort and tranquility, our rooms offer a perfect blend of modern luxury and timeless elegance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 md:mt-14 md:grid md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3"
        >
          {roomCards.map((room) => (
            <motion.div
              key={room.title}
              variants={subtleReveal}
              className="min-w-[82%] snap-center md:min-w-0"
            >
              <RoomCard {...room} compact />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default RoomsPreview;
