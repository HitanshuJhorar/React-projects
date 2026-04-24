import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current" strokeWidth="1.7">
      <path d="M5 13a7 7 0 0 1 14 0" />
      <path d="M5 13v4a2 2 0 0 0 2 2h1v-6H7a2 2 0 0 0-2 2Z" />
      <path d="M19 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
      <path d="M12 20v1" />
    </svg>
  );
}

function CTASection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-12">
        <Container>
          <div className="overflow-hidden rounded-[28px] bg-[#111010] px-6 py-8 text-white shadow-[0_26px_46px_rgba(17,10,10,0.18)] md:px-8">
            <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B76E79] text-white">
                <HeadsetIcon />
              </div>
              <div>
                <h2 className="font-display text-[38px] leading-none md:text-[46px]">
                  Bespoke Requests
                </h2>
                <p className="mt-4 max-w-[620px] text-[15px] leading-[1.8] text-white/72">
                  For exclusive buyouts, private events, or unique accommodations,
                  connect directly with our head concierge to craft your bespoke
                  Lumiere experience.
                </p>
              </div>
              <Button onClick={() => setIsOpen(true)} className="px-8 py-4">
                Contact Concierge Directly
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="w-full max-w-[520px] rounded-[24px] bg-white p-8 text-left shadow-[0_28px_60px_rgba(17,10,10,0.22)]"
            >
              <h3 className="font-display text-[34px] leading-none text-[#1A1A1A] md:text-[40px]">
                Concierge Direct
              </h3>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#6B6B6B]">
                Reach our concierge desk directly for bespoke itineraries,
                private celebrations, and tailored reservations.
              </p>
              <div className="mt-6 space-y-3 text-[16px] text-[#1A1A1A]">
                <p>Phone: +1 (800) 555-LUME</p>
                <p>Email: concierge@lumieregrand.com</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  as="a"
                  href="mailto:concierge@lumieregrand.com"
                  className="justify-center px-7"
                >
                  Email Concierge
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="justify-center px-7"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default CTASection;
