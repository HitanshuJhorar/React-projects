import { motion } from "framer-motion";
import Container from "../../components/ui/Container";

function RoomsHero() {
  return (
    <section className="overflow-hidden border-b border-[#EEE7E2] bg-[linear-gradient(180deg,#FCFAF8_0%,#F8F6F3_100%)]">
      <Container className="grid min-h-[520px] items-center gap-8 py-12 pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] lg:gap-10 lg:py-0 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-[560px] py-2 lg:py-10"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#B76E79]">
            Rooms & Suites
          </p>
          <h1 className="mt-4 font-display text-[42px] leading-[0.98] text-[#1A1A1A] md:mt-6 md:text-[72px]">
            Our Rooms & Suites
          </h1>
          <p className="mt-4 max-w-[500px] text-[16px] leading-[1.8] text-[#6B6B6B] md:mt-6 md:text-[18px]">
            Experience unparalleled comfort and sophisticated design. Each
            space is crafted to be your private sanctuary of relaxation.
          </p>

          <div className="mt-8 flex items-center gap-4 text-[#D9C2C6] md:mt-10 md:gap-5">
            <span className="h-px w-20 bg-[#D8C0C5]" />
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EADBDD] text-[14px]">
              L
            </span>
            <span className="h-px w-20 bg-[#D8C0C5]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-last h-[260px] overflow-hidden rounded-[28px] sm:h-[320px] lg:order-none lg:h-[520px] lg:rounded-none"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F8F6F3_0%,rgba(248,246,243,0.76)_18%,rgba(248,246,243,0.04)_45%)] lg:-left-24 lg:w-[160px]" />
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury hotel bedroom with layered linens and warm lighting"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}

export default RoomsHero;
