import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Authorize from "./components/Authorize";
import Cart from "./components/Cart";


function Layout() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login";

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorize />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
