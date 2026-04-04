import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Booking from "./pages/Booking";

import { MenuProvider } from "./Context/MenuContext";
import { FeatureProvider } from "./Context/featureContext";
import "./App.css"
function App() {
  return (
    <FeatureProvider>
      <MenuProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </FeatureProvider>
  );
}

export default App;
