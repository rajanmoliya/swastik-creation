import "@fontsource/poppins";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import LocationMap from "./components/LocationMap";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <ProductSection />
            </div>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-10">
        <LocationMap />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
