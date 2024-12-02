import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/Navbar";
import ProductCard from "@/components/card/productCard";
import Products from "@/components/products/products";
import Sale from "@/components/sale/sale";
import Test from "@/components/test/Test";
import Testimonial from "@/components/testimonial/testimonial";
import Category from "@/components/category/Category";
import News from "@/components/news/news";
import Notice from "@/components/Notice/Notice";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Notice />
      <Hero />
      <Products />
      <Category />
      <Sale />
      <Test />
      <Testimonial />
      <News />
      <Footer />
    </div>
  );
}
