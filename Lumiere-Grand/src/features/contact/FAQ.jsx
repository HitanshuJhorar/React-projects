import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Container from "../../components/ui/Container";
import { faqs } from "../../data/contactContent";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12">
      <Container>
        <div className="rounded-[28px] bg-[#FBF1F2] px-6 py-10 md:px-8">
          <h2 className="text-center font-display text-[42px] leading-none text-[#1A1A1A] md:text-[50px]">
            Frequent Inquiries
          </h2>

          <div className="mx-auto mt-8 max-w-[860px] space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[14px] border border-[#E8DEDA] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-[18px] font-semibold text-[#1A1A1A]">
                      {item.question}
                    </span>
                    <span className="text-[26px] leading-none text-[#6B6B6B]">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      >
                        <p className="px-5 pb-5 text-[15px] leading-[1.8] text-[#6B6B6B]">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
