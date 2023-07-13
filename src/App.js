import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Hero from "./pages/Hero";
import Section from "./pages/Section";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-black px-10">
        <Navbar />
        <Hero />
        <Section />
        <Routes>
          <Route path="/" element={""} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
