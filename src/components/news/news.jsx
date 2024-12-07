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
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/originals/7b/22/b0/7b22b0a0ad8f733865e42b9a9726087e.jpg" alt="Product 1" />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">NEW ARRIVAL</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Stylish Leather Jacket</h2>
                            <p className="leading-relaxed text-base">Check out our latest addition to the fashion line. A stylish and versatile leather jacket perfect for the winter season.</p>
                        </div>
                    </div>
                    {/* Second News Item */}
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg">
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://m.media-amazon.com/images/I/611e5v2QlHL._AC_UF1000,1000_QL80_.jpg" alt="Product 2" />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">LIMITED OFFER</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Wireless Headphones</h2>
                            <p className="leading-relaxed text-base">Upgrade your audio experience with our wireless headphones now available at a discounted price. Don't miss out on this limited offer!</p>
                        </div>
                    </div>
                    {/* Third News Item */}
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg">
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://th.bing.com/th/id/R.e3652f383c53a5717fa5e1438c569e5b?rik=tihv3WHeherfCQ&riu=http%3a%2f%2fg02.a.alicdn.com%2fkf%2fHTB1VS_pHpXXXXaoXXXXq6xXFXXXu%2f220319998%2fHTB1VS_pHpXXXXaoXXXXq6xXFXXXu.jpg&ehk=LInmrEtocFGB2EQRKAPdLJKRd21Bfq7n220RgiFzJDo%3d&risl=&pid=ImgRaw&r=0" alt="Product 3" />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">HOT SALE</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Smartphone X Pro</h2>
                            <p className="leading-relaxed text-base">The all-new Smartphone X Pro is now available with cutting-edge features. Grab yours today with an exciting launch discount!</p>
                        </div>
                    </div>
                    {/* Uncomment and add more products as needed */}
                    {/* <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="bg-white p-6 rounded-lg">
                            <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://example.com/new-product-4.jpg" alt="Product 4" />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">EXCLUSIVE DEAL</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Luxury Watch Collection</h2>
                            <p className="leading-relaxed text-base">Discover our luxury watch collection with exclusive designs for a limited time. Luxury at unbeatable prices.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
