import React from 'react'

export default function News() {
    return (
        <section className="text-gray-600 body-font pb-10">
            <div className="container px-5 mx-auto max-w-7xl">
                <div className="flex flex-wrap w-full mb-4 p-4">
                    <div className="w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">Our Latest Product News</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* First News Item */}
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg">
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="/news/news1.jpg" alt="Product 1" />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">NEW ARRIVAL</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Stylish Leather Jacket</h2>
                            <p className="leading-relaxed text-base">Check out our latest addition to the fashion line. A stylish and versatile leather jacket perfect for the winter season.</p>
                        </div>
                    </div>
                    {/* Second News Item */}
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg">
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="/news/news2.jpg" alt="Product 2" />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">LIMITED OFFER</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Wireless Headphones</h2>
                            <p className="leading-relaxed text-base">Upgrade your audio experience with our wireless headphones now available at a discounted price. Don't miss out on this limited offer!</p>
                        </div>
                    </div>
                    {/* Third News Item */}
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg">
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="/news/news3.jpeg" alt="Product 3" />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">HOT SALE</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Smartphone X Pro</h2>
                            <p className="leading-relaxed text-base">The all-new Smartphone X Pro is now available with cutting-edge features. Grab yours today with an exciting launch discount!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
