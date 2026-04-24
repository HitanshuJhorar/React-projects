import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import {
  ConciergeIcon,
  CutleryIcon,
  LotusIcon,
} from "../../components/icons/LuxuryIcons";
import { services } from "../../data/contactContent";

function ValetIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="1.7">
      <path d="M5 14h14" />
      <path d="M7 14 8.5 9h7L17 14" />
      <circle cx="8" cy="17" r="1.5" />
      <circle cx="16" cy="17" r="1.5" />
    </svg>
  );
}

const iconMap = {
  concierge: ConciergeIcon,
  valet: ValetIcon,
  dining: CutleryIcon,
  spa: LotusIcon,
};

function Services() {
  return (
    <section className="py-12">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-[44px] leading-none text-[#1A1A1A] md:text-[54px]">
            At Your Service
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -4 }}
                className={`px-6 py-4 text-center ${index < services.length - 1 ? "xl:border-r xl:border-[#E7DEDA]" : ""}`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FAEEF0] text-[#B76E79] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_24px_rgba(183,110,121,0.18)]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-[22px] font-display leading-none text-[#1A1A1A]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-[#6B6B6B]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
