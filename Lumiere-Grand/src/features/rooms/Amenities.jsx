import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import {
  CutleryIcon,
  LinenIcon,
  ScreenIcon,
  ServiceBellIcon,
} from "../../components/icons/LuxuryIcons";
import { roomAmenities } from "../../data/roomsContent";

const iconMap = {
  serviceBell: ServiceBellIcon,
  cutlery: CutleryIcon,
  screen: ScreenIcon,
  linen: LinenIcon,
};

function Amenities() {
  const loopedAmenities = [...roomAmenities, ...roomAmenities];

  return (
    <section className="overflow-hidden px-4 pt-12 md:px-0 md:pt-20">
      <Container>
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#B76E79]">
            Enhance Your Stay
          </p>
          <h2 className="mt-4 font-display text-[44px] leading-none text-[#1A1A1A] md:text-[56px]">
            Standard Amenities
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-[1.8] text-[#6B6B6B]">
            Enjoy these complimentary comforts designed to elevate your stay,
            available in every room and suite at Lumiere.
          </p>
        </div>

        <div className="md:hidden">
          <div className="hide-scrollbar mt-10 overflow-x-hidden">
            <div className="mobile-marquee flex w-max gap-4 pb-2">
              {loopedAmenities.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.article
                    key={`${item.title}-${index}`}
                    whileTap={{ scale: 0.95 }}
                    className="interaction-surface w-[260px] rounded-xl border border-[#EAE4DE] bg-white px-6 py-8 text-center shadow-sm"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAEEF0] text-[#B76E79]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 text-[20px] font-medium text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.75] text-[#6B6B6B]">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-12 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4"
        >
          {roomAmenities.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -6 }}
                className="interaction-surface rounded-xl border border-[#EAE4DE] bg-white px-6 py-8 text-center shadow-sm hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAEEF0] text-[#B76E79] transition-all duration-300 ease-out group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-[20px] font-medium text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#6B6B6B]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Amenities;
