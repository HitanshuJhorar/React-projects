import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { galleryItems } from "../../data/galleryContent";
import GalleryItem from "./GalleryItem";

function GalleryGrid({ activeFilter }) {
  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <Container className="px-4 pt-8 md:px-8">
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {filteredItems.map((item) => (
          <GalleryItem key={item.title} item={item} />
        ))}
      </motion.div>
    </Container>
  );
}

export default GalleryGrid;
