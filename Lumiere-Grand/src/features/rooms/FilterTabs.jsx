import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { roomFilters } from "../../data/roomsContent";

function FilterTabs({ activeFilter, onChange }) {
  return (
    <Container>
      <div className="-mt-10 flex overflow-x-auto pb-2 pt-2 md:-mt-8">
        <div className="mx-auto flex min-w-max items-center gap-4 rounded-full bg-white/90 px-2 py-2 shadow-[0_16px_40px_rgba(34,24,21,0.06)]">
          {roomFilters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <motion.button
                key={filter.value}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onChange(filter.value)}
                className={`rounded-full border px-7 py-3 text-[14px] transition-all duration-300 ${
                  isActive
                    ? "border-[#B76E79] bg-[#B76E79] text-white shadow-[0_12px_24px_rgba(183,110,121,0.28)]"
                    : "border-[#E7D6D8] bg-white text-[#6B6B6B] hover:border-[#B76E79] hover:text-[#B76E79]"
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
