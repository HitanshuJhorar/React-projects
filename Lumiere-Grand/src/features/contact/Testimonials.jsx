import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import { testimonials } from "../../data/contactContent";

function Testimonials() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-center font-display text-[44px] leading-none text-[#1A1A1A] md:text-[52px]">
          Guest Experiences
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-8 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -4 }}
              className="rounded-[18px] border border-[#E7DEDA] bg-white px-6 py-6 shadow-[0_12px_24px_rgba(28,18,16,0.04)]"
            >
              <p className="text-[18px] tracking-[0.22em] text-[#B76E79]">*****</p>
              <p className="mt-5 text-[15px] leading-[1.9] text-[#4E4A48]">"{item.quote}"</p>
              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]">
                - {item.name}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Testimonials;
