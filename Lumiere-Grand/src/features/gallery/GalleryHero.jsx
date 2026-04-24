import { motion } from "framer-motion";
import Container from "../../components/ui/Container";

function GalleryHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#ECE5DF] bg-[#FBF8F5]">
      <div className="pointer-events-none absolute -left-24 top-10 opacity-[0.08] blur-[1px]">
        <svg width="220" height="360" viewBox="0 0 220 360" fill="none">
          <path
            d="M145 15c-26 50-42 116-36 188 5 62-10 100-46 142"
            stroke="#B76E79"
            strokeWidth="2"
          />
          <path
            d="M155 62c-23 19-42 22-73 16 23 24 34 43 39 72"
            stroke="#B76E79"
            strokeWidth="2"
          />
          <path
            d="M110 180c-28 18-50 43-66 75"
            stroke="#B76E79"
            strokeWidth="2"
          />
        </svg>
      </div>

      <Container className="grid items-center gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(460px,560px)] lg:gap-10 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-[560px] py-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#B76E79]">
            Gallery
          </p>
          <h1 className="mt-4 font-display text-[42px] leading-[0.98] text-[#1A1A1A] md:mt-6 md:text-[76px]">
            A Glimpse of
            <br />
            Timeless Luxury
          </h1>
          <div className="mt-6 h-px w-24 bg-[#D6B4BA]" />
          <p className="mt-6 max-w-[500px] text-[16px] leading-[1.8] text-[#6B6B6B] md:mt-8 md:text-[18px]">
            Explore the spaces, experiences, and moments that make Lumiere
            Grand an icon of refined hospitality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative order-last h-[260px] overflow-hidden rounded-[28px] sm:h-[320px] lg:order-none lg:h-[520px] lg:rounded-none"
        >
          <div className="absolute inset-y-0 left-0 z-10 w-36 bg-[linear-gradient(90deg,#F8F6F3_0%,rgba(248,246,243,0.82)_50%,rgba(248,246,243,0)_100%)]" />
          <motion.img
            src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=1400&q=80"
            alt="Refined hotel lounge with layered seating and warm chandeliers"
            className="h-full w-full object-cover"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </motion.div>
      </Container>
    </section>
  );
}

export default GalleryHero;
