import { A11y, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { salesItem, categoriesData } from '../Data/Global';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CardLg from './CardLg';
import CardSm from './CardSm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <div className="">
            <Swiper
                modules={[A11y, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {
                    salesItem.map((data, index) => (
                        <SwiperSlide key={index}>
                            <CardLg img={`banner${index + 1}.png`} title={data.name} features={data.features} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="w-[80%] mx-auto">
                <h2 className='font-semibold sm:text-2xl mt-4'>Categories</h2>
            </div>
            <div className="w-full lg:w-[80%] mx-auto relative">
                <Swiper
                    modules={[A11y, Autoplay, Pagination, Navigation]}
                    spaceBetween={5}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            navigation: false, // Disable navigation for screens <= 640px
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        categoriesData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <CardSm title={data.name} items={data.availableItems} image={data.photo} price={data.priceRange} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}
