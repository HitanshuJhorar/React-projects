import { motion } from "framer-motion";

function TestimonialCard({ quote, author, active }) {
  return (
    <motion.article
      animate={{ opacity: active ? 1 : 0.92, y: active ? 0 : 6 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileTap={{ scale: 0.985 }}
      className="interaction-surface rounded-xl border border-[#f1e7e2] bg-white px-6 pb-5 pt-5 text-left shadow-sm hover:shadow-xl"
    >
      <p className="font-display text-[34px] font-semibold leading-none text-[#d98c8c]">
        "
      </p>
      <p className="mt-3 min-h-[96px] text-[14px] leading-[1.8] text-[#6f6663] md:min-h-[120px]">
        {quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d7b396] text-[11px] font-semibold text-white">
          {author.charAt(0)}
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2d2425]">
          {author}
        </span>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;
