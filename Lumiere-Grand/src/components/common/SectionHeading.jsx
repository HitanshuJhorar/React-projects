import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  const aligned = align === "left" ? "text-left" : "text-center";
  const bodyColor = light ? "text-white/70" : "text-[#7f7874]";
  const titleColor = light ? "text-[#f5f1eb]" : "text-[#1d1716]";
  const eyebrowColor = light ? "text-[#c8a97e]" : "text-[#d8a8ae]";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`${aligned} ${className}`.trim()}
    >
      {eyebrow ? (
        <p className={`font-body text-[11px] font-semibold uppercase tracking-[0.28em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 font-display text-[38px] font-semibold leading-[0.95] md:text-[56px] ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mx-auto mt-4 max-w-[620px] text-[14px] leading-[1.75] md:text-[15px] ${bodyColor}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
