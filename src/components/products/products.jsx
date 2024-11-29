import React from 'react'
import ProductCard from '../card/productCard'

export default function Products() {
    return (
        <div className="w-[90%] mx-auto  px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
            <div className="py-4 text-3xl font-semibold">
                <h2>Popular Items</h2>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                {
                    [...Array(10)].map(
                        (data, key) => {
                            return (
                                <ProductCard key={key} />
                            )
                        }
                    )
                }
            </div>
            <div className="flex flex-col items-center md:flex-row my-8">
                <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    <span className="mr-3">Browse More</span>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4"
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            points="4,4 22,4 19,14 4,14 "
                        />
                        <circle
                            cx="4"
                            cy="22"
                            r="2"
                            strokeLinejoin="miter"
                            strokeLinecap="square"
                            stroke="none"
                            fill="currentColor"
                        />
                        <circle
                            cx="20"
                            cy="22"
                            r="2"
                            strokeLinejoin="miter"
                            strokeLinecap="square"
                            stroke="none"
                            fill="currentColor"
                        />
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            points="1,1 4,4 4,14 2,18 23,18 "
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}
