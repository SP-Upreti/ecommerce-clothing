import localFont from "next/font/local";
import "./globals.css";
import { AppContextProvider } from "@/context/appContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Lato = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  weight: "100 900",
});

export const metadata = {
  title: "My E-commerce Store - Buy the Best Products Online",
  description:
    "Explore a wide range of quality products at unbeatable prices. Shop now and enjoy fast shipping and top-notch customer service.",
  openGraph: {
    title: "My E-commerce Store - Quality Products Online",
    description:
      "Discover our exclusive deals and discounts on top products. Shop now for the best deals online!",
    images: ["https://yourdomain.com/images/og-image.jpg"],
    url: "surendraupreti.com.npz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My E-commerce Store - Quality Products Online",
    description:
      "Shop premium products at affordable prices. Free shipping on all orders!",
    images: ["https://yourdomain.com/images/twitter-image.jpg"],
    site: "surendraupreti.com.np",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Lato.variable} font-lato antialiased`}
      >
        <AppContextProvider>
          <ToastContainer />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
