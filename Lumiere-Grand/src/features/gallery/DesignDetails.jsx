import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { designDetailCards } from "../../data/galleryContent";

const iconMap = {
  layers: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.7">
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  ),
  chair: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.7">
      <path d="M7 12V8a3 3 0 1 1 6 0v4" />
      <path d="M5 13h10a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2Z" />
      <path d="M6 17v3" />
      <path d="M14 17v3" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.7">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.7">
      <path d="M6 19c8 0 12-5 12-13-8 0-12 5-12 13Z" />
      <path d="M6 19c2-4 5-7 11-10" />
    </svg>
  ),
};

function DesignDetails() {
  const loopedCards = [...designDetailCards, ...designDetailCards];

  return (
    <section className="relative px-4 py-10 md:px-0 md:py-20">
      <div className="pointer-events-none absolute left-0 top-10 opacity-[0.08]">
        <svg width="180" height="360" viewBox="0 0 180 360" fill="none">
          <path d="M150 20c-30 40-47 93-51 161-3 58-23 109-60 153" stroke="#B76E79" strokeWidth="2" />
          <path d="M124 65c-31 13-50 32-60 64" stroke="#B76E79" strokeWidth="2" />
          <path d="M92 170c-26 17-42 40-49 68" stroke="#B76E79" strokeWidth="2" />
        </svg>
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#B76E79]">
              Design & Details
            </p>
            <h2 className="mx-auto mt-5 max-w-[700px] font-display text-[48px] leading-[1.04] text-[#1A1A1A] md:text-[62px] lg:mx-0">
              Crafted with Intention, Defined by Elegance
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.8] text-[#6B6B6B] lg:mx-0">
              Every material, every texture, every detail is chosen to create a
              sense of calm, sophistication, and understated luxury.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto h-[360px] w-full max-w-[440px]"
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
              alt="Soft marble and neutral bedroom textures"
              className="absolute left-0 top-10 h-[260px] w-[140px] rounded-[10px] object-cover shadow-[0_20px_34px_rgba(31,21,18,0.08)]"
            />
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
              alt="Warm wood and craftsmanship detail"
              className="absolute left-[110px] top-0 h-[320px] w-[170px] rounded-[10px] object-cover shadow-[0_20px_34px_rgba(31,21,18,0.08)]"
            />
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80"
              alt="Folded premium textiles and tonal materials"
              className="absolute right-0 top-12 h-[280px] w-[120px] rounded-[10px] object-cover shadow-[0_20px_34px_rgba(31,21,18,0.08)]"
            />
            <img
              src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80"
              alt="Botanical accent and natural styling"
              className="absolute bottom-2 left-[72px] h-[90px] w-[170px] rounded-[10px] object-cover shadow-[0_18px_28px_rgba(31,21,18,0.1)]"
            />
          </motion.div>
        </div>

        <div className="md:hidden">
          <div className="mt-10 overflow-hidden">
            <div className="mobile-marquee flex min-w-max items-stretch gap-4 pb-2 pr-4 will-change-transform">
              {loopedCards.map((card, index) => (
                <motion.article
                  key={`${card.title}-${index}`}
                  whileTap={{ scale: 0.95 }}
                  className="w-[260px] shrink-0 rounded-xl bg-white px-6 py-8 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBEEF0] text-[#B76E79]">
                    {iconMap[card.icon]}
                  </div>
                  <h3 className="mt-5 text-[21px] font-medium text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-[#6B6B6B]">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4"
        >
          {designDetailCards.map((card) => (
            <motion.article
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white px-6 py-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBEEF0] text-[#B76E79] transition-transform duration-300 group-hover:scale-105">
                {iconMap[card.icon]}
              </div>
              <h3 className="mt-5 text-[21px] font-medium text-[#1A1A1A]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-[#6B6B6B]">
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default DesignDetails;
