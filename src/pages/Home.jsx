import NavBar from '../components/NavBar'
import Hero from '../components/Hero';
import Product from '../components/Products';
import Sales from '../components/Sales';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import Testimonial from '../components/Testimonial';
import Partners from '../components/Partners';
import News from '../components/News';



export default function Home() {


    return (
        <div className="">
            <Hero />
            <Product />
            <Sales />
            <Feature />
            <Testimonial />
            <Partners />
            <News/>
        </div>
    )
}
