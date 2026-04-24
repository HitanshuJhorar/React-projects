import { motion } from "framer-motion";
import {
  DumbbellIcon,
  LotusIcon,
  PoolIcon,
  WifiIcon,
} from "../../components/icons/LuxuryIcons";
import SectionHeading from "../../components/common/SectionHeading";
import { amenities } from "../../data/homeContent";
import { staggerContainer, subtleReveal } from "../../utils/motion";

const iconMap = {
  wifi: WifiIcon,
  lotus: LotusIcon,
  pool: PoolIcon,
  dumbbell: DumbbellIcon,
};

function Amenities() {
  const loopedAmenities = [...amenities, ...amenities];

  return (
    <section id="amenities" className="overflow-hidden px-4 pb-16 md:px-10 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading
          title="Curated Experiences"
          description="Every detail is crafted for your comfort and well-being."
        />

        <div className="md:hidden">
          <div className="hide-scrollbar mt-10 overflow-x-hidden">
            <div className="mobile-marquee flex w-max gap-4 pb-2">
              {loopedAmenities.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.article
                    key={`${item.title}-${index}`}
                    whileTap={{ scale: 0.95 }}
                    className="interaction-surface w-[260px] rounded-xl border border-[#f1e7e2] bg-white px-6 py-8 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center text-[#d98c8c] transition-transform duration-300 ease-out group-hover:scale-105">
                      <Icon className="h-9 w-9" />
                    </div>
                    <h3 className="mt-4 font-body text-[20px] font-medium text-[#252021]">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[220px] text-[13px] leading-[1.7] text-[#8a817d]">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4"
        >
          {amenities.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                variants={subtleReveal}
                whileHover={{ y: -6 }}
                className="interaction-surface rounded-xl border border-[#f1e7e2] bg-white px-8 py-10 text-center shadow-sm hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center text-[#d98c8c] transition-transform duration-300 ease-out group-hover:scale-105">
                  <Icon className="h-9 w-9" />
                </div>
                <h3 className="mt-4 font-body text-[20px] font-medium text-[#252021]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[220px] text-[13px] leading-[1.7] text-[#8a817d]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Amenities;
