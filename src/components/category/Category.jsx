"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'

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

export default function Category() {
    return (
        <div className='w-[90%]  px-4 sm:py-16  sm:px-6 lg:px-8 mx-auto'>

            <div className="grid grid-cols-5 gap-10 ">
                <div className="col-span-3 gap-x-10 border-2 border-slate-300 rounded-xl">

                    <Swiper
                        modules={[Pagination, Autoplay, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        loop
                        pagination={{
                            el: ".custom-pagination-ii",
                            clickable: true
                        }}
                    >
                        {[...Array(3)].map((item, idx) => (
                            <SwiperSlide key={idx} className="py-10">
                                <div className="  px-10 grid grid-cols-2 items-center">
                                    <div className="">
                                        <Image src={"/speaker.png"} alt="okay" height={100} width={400} />
                                    </div>
                                    <div className="">
                                        <div className="flex flex-col gap-2">
                                            <h2 className='text-2xl font-semibold'>JBL bar 2.1 deep bass</h2>
                                            <p className='text-xl'>$11,70</p>
                                            <p className='flex gap-2 mt-5'>
                                                {
                                                    [...Array(5)].map(
                                                        (star, key) => {
                                                            return (
                                                                <span key={key}>
                                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9.35741 1.96841L10.6557 4.56495C10.8327 4.91902 11.3048 5.2731 11.6982 5.33211L14.0489 5.72553C15.5537 5.98125 15.9078 7.06314 14.8259 8.14503L12.9965 9.98424C12.6916 10.2891 12.5146 10.8891 12.6129 11.3219L13.1342 13.5938C13.5473 15.3839 12.5932 16.0822 11.0097 15.1478L8.80662 13.8397C8.40337 13.6037 7.75424 13.6037 7.35099 13.8397L5.13803 15.138C3.55453 16.0723 2.6005 15.374 3.01359 13.584L3.53486 11.312C3.63322 10.8891 3.45618 10.2891 3.15128 9.97441L1.33174 8.15486C0.249849 7.07297 0.603923 5.98125 2.10873 5.73536L4.45939 5.34195C4.8528 5.2731 5.3249 4.92886 5.50194 4.57479L6.80021 1.97825C7.49852 0.561954 8.65909 0.561954 9.35741 1.96841Z" fill="#ACACAC" />
                                                                    </svg>
                                                                </span>
                                                            )
                                                        }
                                                    )
                                                }
                                            </p>
                                        </div>
                                        <div className="flex gap-2 my-10">
                                            {
                                                [...Array(4)].map(
                                                    (star, key) => {
                                                        return (
                                                            <div key={key} className="h-16 w-16 rounded-full bg-yellow-500 flex justify-center items-center text-2xl font-semibold text-white cursor-pointer">
                                                                <h3>{50 + key}</h3>
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                        </div>

                                        <div className="flex gap-4 items-center ">
                                            <button className="bg-[#87BCD9] border-2 border-[#87BCD9]  px-8 rounded-xl py-3 capitalize font-semibold flex gap-8 items-center">
                                                <span>add to cart</span>
                                                <span className='h-[30px] w-[30px] bg-yellow-500 flex justify-center items-center rounded-full'><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.48849 2.38867H2.73636C3.5109 2.38867 4.12048 3.05563 4.05594 3.823L3.46069 10.9659C3.36029 12.1349 4.28542 13.1389 5.46157 13.1389H13.0994C14.1321 13.1389 15.0357 12.2927 15.1146 11.2671L15.5018 5.88843C15.5879 4.69794 14.6843 3.72976 13.4866 3.72976H4.22806" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.7081 16.7319C12.2032 16.7319 12.6046 16.3305 12.6046 15.8354C12.6046 15.3403 12.2032 14.939 11.7081 14.939C11.213 14.939 10.8116 15.3403 10.8116 15.8354C10.8116 16.3305 11.213 16.7319 11.7081 16.7319Z" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M5.97082 16.7319C6.46592 16.7319 6.86728 16.3305 6.86728 15.8354C6.86728 15.3403 6.46592 14.939 5.97082 14.939C5.47573 14.939 5.07437 15.3403 5.07437 15.8354C5.07437 16.3305 5.47573 16.7319 5.97082 16.7319Z" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6.50864 6.69165H15.1146" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                </span>
                                            </button>
                                            <button className="bg-[#87BCD9] border-2 border-[#87BCD9]  px-4 rounded-lg py-3 capitalize font-semibold flex gap-8 items-center h-full">
                                                <Image src={"/eye.png"} alt="okay" height={35} width={25} />

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex mx-auto w-fit justify-center items-center gap-2 translate-y-[-20px]"> <div className="custom-pagination-ii "></div></div>
                </div>
                <div className="col-span-2  rounded-lg grid grid-cols-2 items-center">
                    <div className="w-full  col-span-2 flex flex-col gap-5">
                        {
                            [...Array(2)].map(
                                (data, key) => {
                                    return (
                                        <div className="flex gap-10 rounded-lg   border-2 border-slate-300  p-10" key={key}>
                                            <div className="">
                                                <Image src={key == 0 ? "/console.png" : "/laptop.png"} alt="okay" height={100} width={200} />
                                            </div>
                                            <div className="">
                                                <div className="flex flex-col gap-2">
                                                    <h2 className='text-2xl font-semibold'>JBL bar 2.1 deep bass</h2>
                                                    <p className='text-xl'>$11,70</p>
                                                    <p className='flex gap-2 mt-5'>
                                                        {
                                                            [...Array(5)].map(
                                                                (star, key) => {
                                                                    return (
                                                                        <span key={key}>
                                                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M9.35741 1.96841L10.6557 4.56495C10.8327 4.91902 11.3048 5.2731 11.6982 5.33211L14.0489 5.72553C15.5537 5.98125 15.9078 7.06314 14.8259 8.14503L12.9965 9.98424C12.6916 10.2891 12.5146 10.8891 12.6129 11.3219L13.1342 13.5938C13.5473 15.3839 12.5932 16.0822 11.0097 15.1478L8.80662 13.8397C8.40337 13.6037 7.75424 13.6037 7.35099 13.8397L5.13803 15.138C3.55453 16.0723 2.6005 15.374 3.01359 13.584L3.53486 11.312C3.63322 10.8891 3.45618 10.2891 3.15128 9.97441L1.33174 8.15486C0.249849 7.07297 0.603923 5.98125 2.10873 5.73536L4.45939 5.34195C4.8528 5.2731 5.3249 4.92886 5.50194 4.57479L6.80021 1.97825C7.49852 0.561954 8.65909 0.561954 9.35741 1.96841Z" fill="#ACACAC" />
                                                                            </svg>
                                                                        </span>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
