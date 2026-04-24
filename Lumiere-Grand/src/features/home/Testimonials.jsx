import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";
import SectionHeading from "../../components/common/SectionHeading";
import { testimonials } from "../../data/homeContent";

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="px-4 pb-16 md:px-10 md:pb-24 lg:px-12">
      <div className="mx-auto max-w-[1320px] text-center">
        <SectionHeading
          title="Guest Experiences"
          description="Hear from our esteemed guests about their unforgettable stays."
        />

        <div className="md:hidden">
          <motion.div
            className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className="min-w-[82%] snap-center">
                <TestimonialCard {...testimonial} active={index === active} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45 }}
              className="mt-14 grid gap-8 md:grid-cols-3"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.author}-${active}`}
                  {...testimonial}
                  active={index === active}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.author}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? "w-6 bg-[#d98c8c]" : "w-2.5 bg-[#ddd8d5]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
