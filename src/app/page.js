import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/Navbar";
import ProductCard from "@/components/card/productCard";
import Products from "@/components/products/products";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}
