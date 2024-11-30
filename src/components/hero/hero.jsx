"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin Escobar",
            title: "Founder of Meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc.",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela Stian",
            title: "Product Designer",
            quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim Ahmed",
            title: "DevOp Engineer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is.",
        }
    ];

    const categories = [
        {
            name: "smart watches",
            img: "/watch.png"
        },
        {
            name: "wireless Earphone",
            img: "/earphone.png"
        },
        {
            name: "wireless headphone",
            img: "/headphone.png"
        },
        {
            name: "smart phones",
            img: "/phone.png"
        },
        {
            name: "running shoe",
            img: "/shoe.png"
        },
        {
            name: "Leather items",
            img: "/leather.png"
        },
        {
            name: "smart watches",
            img: "/watch.png"
        },
        {
            name: "wireless Earphone",
            img: "/earphone.png"
        },
        {
            name: "wireless headphone",
            img: "/headphone.png"
        },
        {
            name: "smart phones",
            img: "/phone.png"
        },
        {
            name: "running shoe",
            img: "/shoe.png"
        },
        {
            name: "Leather items",
            img: "/leather.png"
        },

    ]
    return (
        <section className="py-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="py-5">
                    <Swiper
                        modules={[Pagination, Autoplay, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        loop
                        pagination={{
                            el: ".custom-pagination",
                            clickable: true
                        }}
                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={idx} className="pb-4">
                                <div className="flex justify-between flex-col md:flex-row ">
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-5xl font-bold max-w-[5rem] leading-[50px] text-teal-800">Cannon Camera</h2>
                                        <p className="hidden sm:block w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt voluptatum cumque voluptatem totam cupiditate minus, magnam quaerat velit iusto?</p>
                                        <div className="flex gap-8 items-center">
                                            <button className="bg-yellow-500 border-2 border-yellow-500 text-white px-8 rounded-lg py-3 capitalize font-semibold">shop now</button>
                                            <button className="border-2 border-purple-500 text-purple-600 px-8 rounded-lg py-3 capitalize font-semibold">view more</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Image src={"/Group 1.png"} alt="okay" height={300} width={300} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-pagination mt-6"></div>
                </div>

                <div className="py-10  relative">
                    <Swiper
                        modules={[Pagination, Autoplay, A11y, Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{ delay: 3000 }}
                        loop
                        navigation={
                            {
                                nextEl: ".next-el",
                                prevEl: ".prev-el",
                            }
                        }
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1000: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {categories.map((item, idx) => (
                            <SwiperSlide key={idx} className="">
                                <div className="flex justify-between gap-10 px-8 items-center p-4 border-2 border-slate-300 rounded-md">
                                    <div className="h-[8rem] w-[8rem] bg-slate-100 rounded-full flex justify-center items-center">
                                        <Image src={item.img} alt="okay" height={100} width={100} style={{ width: "5rem", height: "auto" }} />
                                    </div>
                                    <div className="">
                                        <h2 className="text-2xl font-bold capitalize">{item.name}</h2>
                                        <p className="text-lg">{"("}{idx + 12} items{")"}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Navigation Buttons */}
                    <div className="flex justify-between w-full mt-4 absolute top-1/2 translate-y-[-90%] z-10">
                        <button className="prev-el translate-x-[-5rem] bg-gray-200 hover:bg-gray-300 hover:text-white text-gray-700 h-[50px] w-[50px] flex justify-center items-center p-2 rounded-full shadow-md">
                            <span>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.07 6.42999L4 12.5L10.07 18.57" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12.5H4.17004" className="stroke-black hover:stroke-yellow-500" stroke="" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                        </button>
                        <button className="next-el translate-x-[5rem] hover:bg-gray-300 hover:text-white bg-gray-200 rotate-180    h-[50px] w-[50px] flex justify-center items-center text-gray-700 p-2 rounded-full shadow-md">
                            <span>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.07 6.42999L4 12.5L10.07 18.57" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12.5H4.17004" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

