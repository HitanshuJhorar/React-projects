import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { footerColumns } from "../../data/homeContent";
import { fadeUp, staggerContainer, subtleReveal } from "../../utils/motion";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/reference/home/footer-bg.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.84),rgba(11,11,11,0.94))]" />

      <div className="relative px-6 pb-10 pt-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-[46px] text-[#f5f1eb] md:text-[68px]"
            >
              Your Sanctuary Awaits
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[720px] text-[15px] leading-[1.8] text-white/72"
            >
              Book directly with us to enjoy exclusive benefits and guarantee the
              best available rates for your stay.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Button as={Link} to="/contact" className="px-10 py-4">
                Book Your Stay
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_repeat(4,1fr)]"
          >
            <motion.div variants={subtleReveal}>
              <img
                src="/images/Brand-logo-img.png"
                alt="Lumiere Grand"
                className="h-16 w-auto"
              />
            </motion.div>

            {footerColumns.map((column) => (
              <motion.div key={column.title} variants={subtleReveal}>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white">
                  {column.title}
                </h3>
                <div className="mt-4 space-y-3 text-[14px] leading-[1.7] text-white/65">
                  {column.links.map((link) => (
                    <p key={link}>{link}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 text-center text-[12px] text-white/45">
            © 2025 Lumiere Grand. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
