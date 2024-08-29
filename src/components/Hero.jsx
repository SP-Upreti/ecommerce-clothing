import { A11y, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        <div className="py-10">
            <Swiper
                // install Swiper modules
                modules={[A11y, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                {
                    [...Array(3)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <CardLg />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="mt-7 w-[80%] mx-auto relative">
                <Swiper
                    // install Swiper modules
                    modules={[A11y, Autoplay, Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom'
                    }}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    breakpoints={
                        {
                            1200: {
                                slidesPerView: 3
                            },
                            800: {
                                slidesPerView: 2
                            },
                            500: {
                                slidesPerView: 1
                            },

                        }
                    }
                >
                    {
                        [...Array(6)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <CardSm />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev-custom">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="swiper-button-next-custom">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    );
}
