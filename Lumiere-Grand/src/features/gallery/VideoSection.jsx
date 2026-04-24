import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
      <path d="M8 6v12l10-6Z" />
    </svg>
  );
}

function VideoSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 rounded-[28px] bg-[#F4E7E9] p-8 md:grid-cols-[0.92fr_1.18fr] md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#B76E79]">
              Immersive Experience
            </p>
            <h2 className="mt-5 font-display text-[48px] leading-[0.98] text-[#1A1A1A] md:text-[60px]">
              Step Into
              <br />
              Lumière Grand
            </h2>
            <div className="mt-6 h-px w-20 bg-[#D6B4BA]" />
            <p className="mt-6 max-w-[420px] text-[15px] leading-[1.8] text-[#6B6B6B]">
              Take a visual journey through our spaces and experiences, and feel
              the elegance, comfort, and attention to detail that define us.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/contact" className="px-7">
                Watch Full Video
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-[22px]"
          >
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
              alt="Lush courtyard and fountain framed like a cinematic hotel scene"
              className="h-full min-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,11,0.16),rgba(14,11,11,0.44))]" />
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/60 bg-[#B76E79] text-white shadow-[0_18px_40px_rgba(183,110,121,0.4)]">
                <PlayIcon />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default VideoSection;
