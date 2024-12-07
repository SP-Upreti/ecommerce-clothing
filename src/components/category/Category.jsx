"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React from 'react'

export default function Category() {
    const img = ["/discount/shoei.png", "/discount/shoeii.png", "/discount/showiii.jpg", "/discount/showiiii.jpg"]
    return (
        <div className='max-w-7xl  px-4 sm:py-10  sm:px-6 lg:px-8 mx-auto'>
            <h2 className="font-semibold text-3xl">Get Upto 50% discount</h2>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-4 gap-10">
                {
                    img.map(
                        (data, key) => {
                            return (
                                <a key={key} href="#" className="group block overflow-hidden ">
                                    <div className="relative h-[350px] sm:h-[300px]">
                                        <img
                                            src={data}
                                            alt={data}
                                            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:scale-110 transition-all"
                                        />
                                    </div>

                                    <div className="relative bg-white pt-3">
                                        <h3 className="text-sm text-gray-700  flex justify-between items-center">
                                            <span className="group-hover:underline group-hover:underline-offset-4">Limited Edition Sports Trainer</span>
                                            <span className="font-semibold text-xl">$189.99</span>
                                        </h3>

                                        <div className="mt-1.5 flex items-center justify-between text-gray-900">
                                            <p className="text-xs uppercase tracking-wide">6 Colors</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
