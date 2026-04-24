import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { BedIcon, PoolIcon } from "../../components/icons/LuxuryIcons";
import { fadeUp, staggerContainer } from "../../utils/motion";

function formatDate(dateString) {
  if (!dateString) return "Select a date";

  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.getTime())) return "Select a date";

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getTomorrow(dateString) {
  if (!dateString) return "";

  const nextDay = new Date(dateString);
  if (Number.isNaN(nextDay.getTime())) return "";

  nextDay.setDate(nextDay.getDate() + 1);
  return nextDay.toISOString().split("T")[0];
}

function CalendarAdornment() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
      <path d="M7 3v3" />
      <path d="M17 3v3" />
      <path d="M4 8h16" />
      <rect x="4" y="5" width="16" height="15" rx="3" />
    </svg>
  );
}

function ChevronAdornment() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Hero() {
  const today = useMemo(() => new Date(), []);
  const defaultCheckIn = useMemo(() => today.toISOString().split("T")[0], [today]);
  const defaultCheckOut = useMemo(() => {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    return nextDay.toISOString().split("T")[0];
  }, [today]);

  const [checkInDate, setCheckInDate] = useState(defaultCheckIn);
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOut);
  const [guests, setGuests] = useState("2");

  const bookingFields = [
    {
      label: "Check-in",
      value: checkInDate,
      min: defaultCheckIn,
      icon: <PoolIcon className="h-5 w-5" />,
      onChange: (event) => {
        const nextCheckIn = event.target.value;
        setCheckInDate(nextCheckIn);

        if (!nextCheckIn) {
          setCheckOutDate("");
          return;
        }

        if (!checkOutDate || checkOutDate <= nextCheckIn) {
          setCheckOutDate(getTomorrow(nextCheckIn));
        }
      },
      helper: formatDate(checkInDate),
    },
    {
      label: "Check-out",
      value: checkOutDate,
      min: getTomorrow(checkInDate),
      icon: <PoolIcon className="h-5 w-5" />,
      onChange: (event) => {
        const nextCheckOut = event.target.value;
        if (!nextCheckOut) {
          setCheckOutDate("");
          return;
        }

        if (!checkInDate || nextCheckOut > checkInDate) {
          setCheckOutDate(nextCheckOut);
        }
      },
      helper: formatDate(checkOutDate),
    },
  ];

  return (
    <section
      id="home-hero"
      className="relative flex flex-col lg:grid lg:grid-cols-2 items-center min-h-[60vh] lg:min-h-screen bg-[#0b0b0b]"
    >
      <img
        src="/images/hero-image.png"
        alt="Lumiere Grand hotel entrance"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 bg-black/50 pointer-events-none" />

      <div className="relative z-10 col-span-2 container mx-auto w-full px-6 pb-8 pt-28 md:pb-36 md:pt-40 lg:px-12">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex max-w-[600px] flex-col gap-4"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-3xl leading-tight text-[#f5f1eb] lg:text-6xl"
            >
              Experience
              <br />
              Luxury Redefined
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-sm leading-[1.8] text-white sm:text-[15px] md:mt-2 md:text-[17px]"
            >
              Where timeless elegance meets modern comfort. Your sanctuary of
              luxury and relaxation.
            </motion.p>
            <motion.div variants={fadeUp} className="relative z-10 mt-4">
              <Button as={Link} to="/contact" className="inline-block w-full px-8 py-4 lg:w-auto">
                Reserve Your Stay
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
          className="relative mt-6 w-full md:absolute md:inset-x-0 md:bottom-0 md:translate-y-1/2 md:px-10 lg:px-12"
        >
          <div className="mx-auto grid w-full max-w-[1160px] gap-3 rounded-xl border border-[#eadfda] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(252,248,246,0.95))] p-4 shadow-[0_18px_40px_rgba(17,10,9,0.14)] ring-1 ring-white/70 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center md:gap-3 md:rounded-[20px] md:p-5 md:shadow-[0_25px_70px_rgba(17,10,9,0.22)] md:backdrop-blur-xl">
            {bookingFields.map((item, index) => (
              <label
                key={item.label}
                className={`group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-in-out hover:border-[#ead6d5] hover:bg-[#fcf7f5] focus-within:border-[#d9b1b7] focus-within:bg-white focus-within:shadow-[0_12px_26px_rgba(217,140,140,0.12)] ${
                  index < 2 ? "md:border-r md:border-[#eadfda]" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8eeef] text-[#d98c8c] transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:bg-[#f7e6e8] group-focus-within:bg-[#f4dde0]">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c6a7a3] transition-colors duration-300 group-hover:text-[#bd8f96] group-focus-within:text-[#b77b85]">
                    {item.label}
                  </p>
                  <div className="relative mt-1">
                    <input
                      type="date"
                      value={item.value}
                      min={item.min || undefined}
                      onChange={item.onChange}
                      className="booking-control w-full border-none bg-transparent p-0 pr-8 text-[15px] font-medium text-[#1d1716] outline-none transition-colors duration-300 group-hover:text-[#15100f]"
                    />
                    <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#b78a91] transition-colors duration-300 group-hover:text-[#a9727b] group-focus-within:text-[#a15f69]">
                      <CalendarAdornment />
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] text-[#6f6562] transition-colors duration-300 group-hover:text-[#544b49]">
                    {item.helper}
                  </p>
                </div>
              </label>
            ))}

            <label className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-in-out hover:border-[#ead6d5] hover:bg-[#fcf7f5] focus-within:border-[#d9b1b7] focus-within:bg-white focus-within:shadow-[0_12px_26px_rgba(217,140,140,0.12)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8eeef] text-[#d98c8c] transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:bg-[#f7e6e8] group-focus-within:bg-[#f4dde0]">
                <BedIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c6a7a3] transition-colors duration-300 group-hover:text-[#bd8f96] group-focus-within:text-[#b77b85]">
                  Guests
                </p>
                <div className="relative mt-1">
                  <select
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    className="booking-control w-full appearance-none border-none bg-transparent p-0 pr-8 text-[15px] font-medium text-[#1d1716] outline-none transition-colors duration-300 group-hover:text-[#15100f]"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#b78a91] transition-colors duration-300 group-hover:text-[#a9727b] group-focus-within:text-[#a15f69]">
                    <ChevronAdornment />
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-[#6f6562] transition-colors duration-300 group-hover:text-[#544b49]">
                  {guests} {Number(guests) === 1 ? "Guest" : "Guests"}
                </p>
              </div>
            </label>

            <Button as={Link} to="/contact" className="w-full px-8 py-4 shadow-[0_12px_24px_rgba(217,140,140,0.16)] md:w-auto">
              Check Availability
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
