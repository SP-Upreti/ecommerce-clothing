import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Authorize from "./components/Authorize";
import Cart from "./components/Cart";
import Contact from './components/Contact';
import { MetaData } from './Data/Global';
import ProductPage from './components/ProductPage';


function Layout() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login";

  useEffect(() => {
    function setMetadata() {
      // Set the document title
      document.title = MetaData.home.title;

      // Set keywords
      const keyWords = document.createElement('meta');
      keyWords.name = 'keywords';
      keyWords.content = MetaData.home.key.join(', '); // Join array elements with commas
      document.head.appendChild(keyWords);

      // Set description
      const description = document.createElement('meta');
      description.name = 'description';
      description.content = MetaData.home.desc;
      document.head.appendChild(description);
    }

    setMetadata();

    return () => {
      // Clean up by removing the meta tags if necessary
      const metaTags = document.querySelectorAll('meta[name="keywords"], meta[name="description"]');
      metaTags.forEach(tag => tag.remove());
    };
  }, []);

  return (
    <div className='bg-[--secondary]' >
      {!hideNavAndFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorize />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
