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
                                <div className="flex justify-between flex-col-reverse md:flex-row ">
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-5xl font-bold max-w-[5rem] leading-[50px] text-teal-800">Cannon Camera</h2>
                                        <p className="hidden sm:block w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt voluptatum cumque voluptatem totam cupiditate minus, magnam quaerat velit iusto?</p>
                                        <div className="flex gap-8 items-center w-fit">
                                            <button className="cartBtn rounded-full px-4">
                                                <svg className="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                                                ADD TO CART
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="product"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
                                            </button>
                                            <button
                                                type="submit"
                                                className="w-fit  border flex justify-center gap-2 items-center mx-auto shadow-xl text-lg uppercase bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 py-2 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4  overflow-hidden border-slate-200 rounded-full group"
                                            >
                                                Explore
                                                <svg
                                                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                                    viewBox="0 0 16 19"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                                        className="fill-gray-800 group-hover:fill-gray-800"
                                                    ></path>
                                                </svg>
                                            </button>

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

