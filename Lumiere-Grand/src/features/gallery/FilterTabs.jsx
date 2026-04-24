import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { galleryFilters } from "../../data/galleryContent";

function FilterTabs({ activeFilter, onChange }) {
  return (
    <Container className="px-4 pt-8 md:px-8">
      <div className="hide-scrollbar flex overflow-x-auto pb-2">
        <div className="mx-auto flex min-w-max items-center gap-4 rounded-full bg-white/90 px-2 py-2 shadow-[0_16px_40px_rgba(34,24,21,0.05)]">
          {galleryFilters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <motion.button
                key={filter.value}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onChange(filter.value)}
                className={`rounded-full border px-7 py-3 text-[14px] transition-all duration-300 ${
                  isActive
                    ? "border-[#B76E79] bg-[#B76E79] text-white shadow-[0_12px_24px_rgba(183,110,121,0.28)]"
                    : "border-[#E5E5E5] bg-white text-[#6B6B6B] hover:border-[#B76E79] hover:text-[#B76E79] hover:shadow-[0_10px_24px_rgba(183,110,121,0.12)]"
                }`}
              >
                {filter.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default FilterTabs;
