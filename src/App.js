import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, Cart, Blog, Profile, Shop, Story } from "./pages/index.js";
import CartProvider from './CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer />
        <div className="px-4 text-black bg-white md:px-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
