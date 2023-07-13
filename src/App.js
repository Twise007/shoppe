import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Hero from "./pages/Hero";
import Section from "./pages/Section";
import Navbar from "./components/Navbar";

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
      </div>
    </BrowserRouter>
  );
}

export default App;
