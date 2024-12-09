"use client"
import React, { useContext } from 'react'
import ProductCard from '../card/productCard'
import Link from 'next/link'
import { AppContext } from '@/context/appContext'

export default function Products() {

    const { allproducts } = useContext(AppContext)
    return (
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-10  gap-24  md:px-8 lg:px-8">
            <div className="py-4 text-3xl font-semibold">
                <h2>Popular Items</h2>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                {
                    allproducts.length == 0 && (
                        <section className="flex items-center justify-center h-full w-full">
                            <div className="dot animate-pulse-custom"></div>
                            <div className="dot animate-pulse-custom animation-delay-300"></div>
                            <div className="dot animate-pulse-custom animation-delay-500"></div>
                            <div className="dot animate-pulse-custom animation-delay-700"></div>
                            <div className="dot animate-pulse-custom animation-delay-900"></div>
                        </section>
                    )
                }
                {
                    allproducts?.slice(0, 10).map(
                        (data, key) => {
                            return (
                                <ProductCard data={data} key={key} />
                            )
                        }
                    )
                }
            </div>
            <div className="flex flex-col items-center md:flex-row my-8">

                <Link href={"/products"}
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-[--primary] hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                >
                    {/* <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                > */}
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
                    {/* </a> */}
                </Link>
            </div>
        </div>
    )
}
