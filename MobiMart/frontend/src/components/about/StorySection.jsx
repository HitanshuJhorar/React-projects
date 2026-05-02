import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppHref } from "../../data/storeInfo";
import { viewportOnce } from "../../utils/animations";

const imageIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const textUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const whatsappHref = buildWhatsAppHref(
  "Hi, I want to know more about your store.",
);

function StoreMock() {
  return (
    <div className="mm-card-dark relative overflow-hidden rounded-3xl p-6 sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(480px_240px_at_40%_10%,rgba(34,183,170,0.20),transparent_62%)]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] font-semibold tracking-wide text-white/65">
              Mobi Mart
            </p>
            <p className="mt-1 text-sm font-medium text-white/85">
              Experience Center
            </p>
          </div>
          <div className="h-8 w-20 rounded-full bg-white/10 ring-1 ring-white/10" />
        </div>

        <div className="mt-6 grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="h-9 rounded-xl bg-white/5 ring-1 ring-white/10"
            />
          ))}
        </div>

        <div className="mt-7 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <div className="h-3 w-36 rounded bg-white/15" />
              <div className="h-3 w-44 rounded bg-white/10" />
            </div>
            <div className="h-10 w-24 rounded-2xl bg-white/12 ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StorySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-14">
      <div className="mm-container">
        <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12">
          <motion.div
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewportOnce}
            variants={imageIn}
          >
            <StoreMock />
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewportOnce}
            variants={textUp}
            className="max-w-xl"
          >
            <h2 className="mm-display text-3xl font-semibold tracking-tight text-[var(--mm-text)] sm:text-[34px]">
              Our Story
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              Mobi Mart started with a simple mission - to make buying
              smartphones easy, transparent, and reliable.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              From brand new flagship devices to carefully tested pre-owned
              phones, we offer strong value, honest pricing, and a smooth
              buying experience from start to finish.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              We are a local business, built on trust, quality, and long-term
              relationships with our customers.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mm-cta-primary mt-6 w-full sm:w-auto"
            >
              <FaWhatsapp aria-hidden="true" />
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
