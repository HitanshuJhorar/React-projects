import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import { ScrollProvider } from "./context/ScrollContext";

function App() {
  return (
    <ScrollProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
                  404
                </p>
                <h1 className="mt-4 text-4xl font-serif text-stone-900">
                  The page you requested could not be found.
                </h1>
                <p className="mt-4 max-w-xl text-stone-600">
                  Try one of the main sections from the navigation to continue
                  exploring Lumiere Grand.
                </p>
              </section>
            }
          />
        </Route>
      </Routes>
    </ScrollProvider>
  );
}

export default App;
