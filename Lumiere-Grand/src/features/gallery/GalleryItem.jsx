import { motion } from "framer-motion";

function GalleryItem({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileTap={{ scale: 0.95 }}
      className="interaction-surface group relative overflow-hidden rounded-xl border border-[#f1e7e2] shadow-sm hover:shadow-xl"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="interaction-image h-56 w-full object-cover"
      />
      <div className="interaction-image-overlay pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,10,0.02),rgba(12,10,10,0.62))]" />
      <div className="absolute inset-x-0 bottom-0 translate-y-4 px-5 pb-5 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F4D8DC]">
          {item.category}
        </p>
        <p className="mt-2 font-display text-[30px] leading-none text-white">
          {item.title}
        </p>
      </div>
    </motion.article>
  );
}

export default GalleryItem;
