import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { ConciergeIcon } from "../../components/icons/LuxuryIcons";
import { Link } from "react-router-dom";

function CTASection({
  title = "Can't Decide?",
  description = "Let our expert concierge help you find the perfect sanctuary for your stay. We will tailor recommendations to your specific needs and preferences.",
  buttonLabel = "Contact Concierge Directly",
}) {
  return (
    <section className="px-4 py-12 md:px-0 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid items-center gap-4 rounded-xl bg-[#F4E6E8] px-6 py-7 md:grid-cols-[1fr_auto] md:gap-6 md:px-10 md:py-8"
        >
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-5 md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#B76E79] text-white shadow-[0_16px_30px_rgba(183,110,121,0.26)]">
              <ConciergeIcon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-display text-[36px] leading-none text-[#1A1A1A]">
                {title}
              </h3>
              <p className="mt-3 max-w-[640px] text-[15px] leading-[1.8] text-[#6B6B6B]">
                {description}
              </p>
            </div>
          </div>

          <Button as={Link} to="/contact" className="w-full px-7 py-3 md:w-auto">
            {buttonLabel}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

export default CTASection;
