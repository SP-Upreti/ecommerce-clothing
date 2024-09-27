import { A11y, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { salesItem, categoriesData } from '../Data/Global';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardLg from './CardLg';
import { FaArrowDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Hero() {
    return (
        <div className="screen-920:w-[90%] px-4 mx-auto relative overflow-hidden xl:h-[calc(100vh-65px)]">
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <Swiper
                        modules={[A11y, Autoplay, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                    >
                        {salesItem.map((data, index) => (
                            <SwiperSlide key={index}>
                                <CardLg img={index} title={data.name} features={data.features} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="h-fit  screen-920:h-[400px] overflow-hidden">
                    <div className="flex flex-col">
                        <div className="">
                            <img src="./OIP2.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-2 mt-5 ">
                <h2 className='text-2xl font-semibold'>Categories</h2>
            </div>
            <Swiper
                modules={[A11y, Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                autoplay={{ delay: 4000 }}
                className=''

                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    500: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    },
                    1300: {
                        slidesPerView: 7
                    }
                }}
            >
                {categoriesData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className=" bg-[#ededed9a] m-1 hover:bg-[#dadada9a] cursor-pointer">
                            <div className="p-2  rounded-xl flex gap-2 items-center flex-col">
                                <div className="sm:h-[100px] rounded-full flex justify-center items-center">
                                    <img src={data.photo} alt="" className='h-[70px] sm:h-[100px]' />
                                </div>
                                <div>
                                    <h2 className='text-[#1B5A7D] font-semibold text-xl'>{data.name}</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}
