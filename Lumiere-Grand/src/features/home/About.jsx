import { motion } from "framer-motion";
import SectionHeading from "../../components/common/SectionHeading";
import { fadeUp, subtleReveal } from "../../utils/motion";

function About() {
  return (
    <section id="about" className="px-6 pb-24 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Our Story"
            title="The Lumiere Legacy"
            align="left"
            description="Since our inception, Lumiere Grand has been a beacon of luxury and refined hospitality. We blend modern sophistication with timeless elegance, creating unforgettable experiences for our guests."
            className="max-w-[560px]"
          />
          <p className="mt-6 max-w-[540px] text-[15px] leading-[1.9] text-[#766d69]">
            Every corner of our property is designed to provide a sanctuary of
            comfort, beauty, and peace - your perfect escape from the ordinary.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ca7584]"
          >
            Discover Our Story <span className="ml-2">→</span>
          </a>
        </motion.div>

        <motion.img
          variants={subtleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          src="/reference/home/about.png"
          alt="Lumiere Grand reception interior"
          className="w-full rounded-[20px] object-cover shadow-[0_22px_50px_rgba(55,31,23,0.08)]"
        />
      </div>
    </section>
  );
}

export default About;
