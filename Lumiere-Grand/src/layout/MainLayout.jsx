import { AnimatePresence, motion } from "framer-motion";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ScrollManager from "../components/routing/ScrollManager";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollManager />
      <Navbar />
      <main className={`flex-1 ${isHomePage ? "" : "pt-28 md:pt-32"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      {!isHomePage ? <Footer /> : null}
    </>
  );
}

export default MainLayout;
