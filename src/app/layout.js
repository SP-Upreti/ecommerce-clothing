import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My E-commerce Store - Buy the Best Products Online",
  description:
    "Explore a wide range of quality products at unbeatable prices. Shop now and enjoy fast shipping and top-notch customer service.",
  openGraph: {
    title: "Your E-commerce Store - Quality Products Online",
    description:
      "Discover our exclusive deals and discounts on top products. Shop now for the best deals online!",
    images: ["https://yourdomain.com/images/og-image.jpg"],
    url: "https://yourdomain.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your E-commerce Store - Quality Products Online",
    description:
      "Shop premium products at affordable prices. Free shipping on all orders!",
    images: ["https://yourdomain.com/images/twitter-image.jpg"],
    site: "@yourtwitterhandle",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
