import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import RoomCard from "../../components/cards/RoomCard";
import { rooms } from "../../data/roomsContent";

function RoomsGrid({ activeFilter }) {
  const normalizedFilter = activeFilter.toLowerCase();
  const filteredRooms =
    normalizedFilter === "all"
      ? rooms
      : rooms.filter((room) =>
          Array.isArray(room.categories) &&
          room.categories.some(
            (category) => category.toLowerCase() === normalizedFilter,
          ),
        );

  return (
    <Container className="px-4 pt-8 md:px-8 md:pt-10">
      <motion.div
        key={normalizedFilter}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-3"
      >
        {filteredRooms.map((room) => (
          <motion.div
            key={`${normalizedFilter}-${room.title}`}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
            className="w-full"
          >
            <RoomCard {...room} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default RoomsGrid;
