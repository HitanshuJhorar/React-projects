import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../data/homeContent";
import { useScrollContext } from "../../hooks/useScrollContext";

function ToggleIcon({ open }) {
  return (
    <span className="relative block h-6 w-6">
      <span
        className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ease-in-out ${
          open ? "rotate-45" : "-translate-y-[7px]"
        }`}
      />
      <span
        className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ease-in-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ease-in-out ${
          open ? "-rotate-45" : "translate-y-[7px]"
        }`}
      />
    </span>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { activeSection, setActiveSection } = useScrollContext();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSolid = isMobile || !isHome || isScrolled;

  useEffect(() => {
    const updateScrollState = () => {
      const nextScrolled = window.scrollY > 0;
      setIsScrolled((current) =>
        current === nextScrolled ? current : nextScrolled,
      );
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const getSectionTarget = (hash) => {
    const sectionMap = {
      home: "home-hero",
      amenities: "amenities",
      about: "about",
      testimonials: "testimonials",
    };

    return sectionMap[hash] ?? hash;
  };



  const handleLogoClick = () => {
    setIsOpen(false);
    setActiveSection("home-hero");

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const wrapperClassName = isSolid
    ? "border-b border-gray-200 bg-white shadow-md"
    : "border-b border-transparent bg-transparent shadow-none";

  const isActiveRoute = (path) => location.pathname === path;

  const currentSection =
    location.pathname !== "/"
      ? ""
      : location.hash
        ? getSectionTarget(location.hash.replace("#", ""))
        : activeSection || "home-hero";

  const isActiveLink = (item) => {
    if (item.to.includes("#")) {
      const [, hash] = item.to.split("#");
      return location.pathname === "/" && currentSection === getSectionTarget(hash);
    }

    return isActiveRoute(item.to);
  };

  const getNavLinkClass = (isActive) => {
    const base = "relative px-4 py-2 rounded-md text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 ease-in-out pointer-events-auto z-20 block";
    
    if (isActive) {
      return `${base} bg-neutral-200/60 text-black`;
    }

    const hoverBg = isSolid ? "before:bg-neutral-500/10" : "before:bg-neutral-200/30";
    const textColor = isSolid ? "text-[#3b3331] hover:text-[#1a1a1a]" : "text-white/88 hover:text-white";

    return `${base} before:absolute before:inset-0 before:rounded-md ${hoverBg} before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 ${textColor}`;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full transition-all duration-300 ease-in-out ${wrapperClassName}`}
      >
        <div
          className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 transition-all duration-300 ease-in-out md:h-auto md:px-8 md:py-3 lg:py-5"
        >
          <Link to="/" className="flex shrink-0 items-center" onClick={handleLogoClick}>
            <img
              src="/images/Brand-logo-img.png"
              alt="Lumiere Grand"
              className={`h-12 w-auto transition-all duration-300 ease-in-out md:h-14 ${
                isSolid ? "brightness-0" : ""
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              if (item.to.includes("#")) {
                const isActiveSection = isActiveLink(item);

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={getNavLinkClass(isActiveSection)}
                  >
                    <span className="relative z-20 pointer-events-auto">{item.label}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection("");
                  }}
                  className={getNavLinkClass(isActiveLink(item))}
                >
                  <span className="relative z-20 pointer-events-auto">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hidden rounded-md bg-[#d98c8c] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white ring-1 ring-white/20 transition-all duration-300 ease-in-out hover:bg-[#cb7f7f] hover:shadow-md hover:scale-105 active:scale-95 md:inline-flex relative z-20 pointer-events-auto"
            >
              Book Now
            </Link>

            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-[#1a1a1a] shadow-sm transition-all duration-300 ease-in-out lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <ToggleIcon open={isOpen} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed inset-0 z-[60] lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.98 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="absolute inset-0 bg-[rgba(8,8,8,0.86)] px-6 pb-8 pt-6 backdrop-blur-xl"
              >
                <div className="flex h-16 items-center justify-between">
                  <Link to="/" className="flex shrink-0 items-center" onClick={handleLogoClick}>
                    <img
                      src="/images/Brand-logo-img.png"
                      alt="Lumiere Grand"
                      className="h-12 w-auto"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white"
                    aria-label="Close navigation menu"
                  >
                    <ToggleIcon open />
                  </button>
                </div>

                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                  className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center gap-7"
                >
                  {navItems.map((item) =>
                    item.to.includes("#") ? (
                      (() => {
                        const isActiveSection = isActiveLink(item);

                        return (
                          <Link
                            key={item.label}
                            to={item.to}
                            onClick={() => setIsOpen(false)}
                            className={`text-[28px] block w-full text-center font-display leading-none transition-all duration-300 ease-in-out active:scale-95 relative z-20 pointer-events-auto ${
                              isActiveSection
                                ? "text-[#d98c8c]"
                                : "text-white hover:text-[#d98c8c]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        );
                      })()
                    ) : (
                      <motion.div
                        key={item.label}
                        variants={{
                          hidden: { opacity: 0, y: 18 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="pointer-events-auto relative z-20"
                      >
                        <Link
                          to={item.to}
                          onClick={() => {
                            setIsOpen(false);
                            setActiveSection("");
                          }}
                          className={
                            `text-[28px] font-display leading-none transition-all duration-300 ease-in-out active:scale-95 ${
                              isActiveLink(item)
                                ? "text-[#d98c8c]"
                                : "text-white hover:text-[#d98c8c]"
                            }`
                          }
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ),
                  )}

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="pointer-events-auto relative z-20"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="mt-4 inline-flex justify-center rounded-md bg-[#d98c8c] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white ring-1 ring-white/20 transition-all duration-300 ease-in-out hover:bg-[#cb7f7f] hover:scale-105 active:scale-95 relative z-20 pointer-events-auto"
                    >
                      Book Your Stay
                    </Link>
                  </motion.div>
                </motion.nav>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}

export default Navbar;
