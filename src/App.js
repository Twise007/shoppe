import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Hero from "./pages/Hero";
import Section from "./pages/Section";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="px-4 text-black bg-white md:px-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Section />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
