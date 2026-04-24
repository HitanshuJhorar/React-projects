import { motion } from "framer-motion";

function ContactBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <path d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
      <path d="M8 10a4 4 0 0 1 8 0" />
      <path d="M8 15a6 6 0 0 1 8 0" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <path d="M12 21s-6-5.5-6-11a6 6 0 1 1 12 0c0 5.5-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <path d="M5 4h4l2 5-2.5 1.8a15 15 0 0 0 4.7 4.7L15 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m5.5 7.5 6.5 5 6.5-5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}

function InfoItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="pt-1 text-[#B76E79]">{icon}</div>
      <div>
        <h3 className="text-[24px] font-display leading-none text-[#1A1A1A]">{title}</h3>
        <div className="mt-3 text-[15px] leading-[1.8] text-[#6B6B6B]">{children}</div>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-[24px] border border-[#EEE6E0] bg-white p-7 shadow-[0_18px_36px_rgba(34,24,21,0.05)] md:p-8"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAEEF0] text-[#B76E79]">
          <ContactBadgeIcon />
        </div>
        <h2 className="font-display text-[34px] leading-none text-[#1A1A1A] md:text-[42px]">
          Get In Touch
        </h2>
      </div>

      <div className="mt-8 space-y-7">
        <InfoItem icon={<PinIcon />} title="Address">
          123 Horizon Way
          <br />
          Coastal City, CA 90210
        </InfoItem>
        <InfoItem icon={<PhoneIcon />} title="Phone">
          +1 (800) 555-LUME
        </InfoItem>
        <InfoItem icon={<MailIcon />} title="Email">
          reservations@lumieregrand.com
        </InfoItem>
        <InfoItem icon={<ClockIcon />} title="Hours">
          Mon - Sun: 7:00 AM - 11:00 PM
        </InfoItem>
      </div>

      <div className="mt-8 overflow-hidden rounded-[22px]">
        <iframe
          title="Lumiere Grand location"
          src="https://www.google.com/maps?q=34.0195,-118.4912&z=12&output=embed"
          className="h-[250px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.aside>
  );
}

export default ContactInfo;
