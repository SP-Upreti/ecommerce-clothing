import Head from 'next/head';

export default function MetaTags() {
    return (
        <Head>
            {/* Basic SEO */}
            <title>Your E-commerce Store - Buy the Best Products Online</title>
            <meta
                name="description"
                content="Explore a wide range of quality products at unbeatable prices. Shop now and enjoy fast shipping and top-notch customer service."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta charSet="UTF-8" />

            {/* Open Graph (OG) Metadata */}
            <meta property="og:title" content="Your E-commerce Store - Quality Products Online" />
            <meta
                property="og:description"
                content="Discover our exclusive deals and discounts on top products. Shop now for the best deals online!"
            />
            <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
            <meta property="og:url" content="https://yourdomain.com" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Your E-commerce Store" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your E-commerce Store - Quality Products Online" />
            <meta
                name="twitter:description"
                content="Shop premium products at affordable prices. Free shipping on all orders!"
            />
            <meta name="twitter:image" content="https://yourdomain.com/images/twitter-image.jpg" />
            <meta name="twitter:site" content="@yourtwitterhandle" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />

            {/* Additional Metadata */}
            <meta name="author" content="Your E-commerce Team" />
            <meta name="theme-color" content="#ff6600" />
            <meta name="keywords" content="ecommerce, buy online, discounts, shopping, products, quality items" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://yourdomain.com" />
        </Head>
    );
}
