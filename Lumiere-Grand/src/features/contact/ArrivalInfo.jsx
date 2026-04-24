import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { arrivalInfo } from "../../data/contactContent";

function PlaneIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="1.7">
      <path d="m3 13 8-2 8-7 2 2-7 8-2 8-2-2 1.5-5.5L3 13Z" />
    </svg>
  );
}

function TrainIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="1.7">
      <rect x="6" y="3" width="12" height="13" rx="3" />
      <path d="M8.5 19 6 22" />
      <path d="M15.5 19 18 22" />
      <path d="M8 9h8" />
      <path d="M9 13h.01" />
      <path d="M15 13h.01" />
      <path d="M4 22h16" />
    </svg>
  );
}

const iconMap = {
  plane: PlaneIcon,
  train: TrainIcon,
};

function ArrivalInfo() {
  return (
    <section className="relative py-12">
      <div className="pointer-events-none absolute left-10 top-10 opacity-[0.07] blur-[1px]">
        <svg width="180" height="260" viewBox="0 0 180 260" fill="none">
          <path d="M120 10c-18 26-30 60-32 101-3 43-20 86-52 129" stroke="#B76E79" strokeWidth="2" />
          <path d="M102 47c-25 9-43 25-54 48" stroke="#B76E79" strokeWidth="2" />
          <path d="M84 117c-19 12-32 29-39 48" stroke="#B76E79" strokeWidth="2" />
        </svg>
      </div>

      <Container>
        <div className="rounded-[28px] bg-[#FBF1F2] px-6 py-10 md:px-8">
          <h2 className="text-center font-display text-[44px] leading-none text-[#1A1A1A] md:text-[52px]">
            Arrival Information
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {arrivalInfo.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                  className={`grid gap-4 rounded-[18px] bg-white px-6 py-6 md:grid-cols-[auto_1fr] ${index === 0 ? "md:border-r md:border-[#E7DEDA]" : ""}`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAEEF0] text-[#B76E79]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-[28px] leading-none text-[#1A1A1A] md:text-[34px]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.8] text-[#6B6B6B]">
                      {item.description}
                    </p>
                    <p className="mt-4 text-[14px] leading-[1.8] text-[#6B6B6B]">
                      {item.extra}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ArrivalInfo;
