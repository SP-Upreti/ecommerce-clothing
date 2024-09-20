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
    const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(true);

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const checkScrollPosition = () => {
        if (window.scrollY > 60) {
            setIsScrollButtonVisible(false);
        } else {
            setIsScrollButtonVisible(true);
        }
    };

    useEffect(() => {
        const scrollButton = document.querySelector(".scroll");
        scrollButton.addEventListener('click', handleScroll);

        // Attach scroll event listener
        window.addEventListener('scroll', checkScrollPosition);

        // Cleanup event listeners
        return () => {
            scrollButton.removeEventListener('click', handleScroll);
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <div className="screen-920:w-[90%] mx-auto relative overflow-hidden xl:h-[calc(100vh-65px)]">
            <Swiper
                modules={[A11y, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {salesItem.map((data, index) => (
                    <SwiperSlide key={index}>
                        <CardLg img={data} title={data.name} features={data.features} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[A11y, Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                autoplay={{ delay: 4000 }}
                className='mt-6 sm:mt-16 '

                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    500: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    },
                    1300: {
                        slidesPerView: 4
                    }
                }}
            >
                {categoriesData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className="border-2 border-slate-300 rounded-xl m-1">
                            <div className="p-2 bg-[white] rounded-xl flex gap-5 items-center">
                                <div className="h-[120px] w-[120px] rounded-full flex justify-center items-center">
                                    <img src={data.photo} alt="" className='w-[100px]' />
                                </div>
                                <div>
                                    <h2 className='text-[#1B5A7D] font-bold text-2xl'>{data.name}</h2>
                                    <p className='text-lg text-[#1B5A7D]'>{`( ${data.availableItems} Items )`}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex mt-5 justify-center">
                <span
                    className={`h-[40px] w-[40px] bg-cyan-600 rounded-full text-white flex justify-center items-center cursor-pointer scroll ${isScrollButtonVisible ? '' : 'hidden'}`}
                >
                    <FaArrowDown className='animate-bounce' />
                </span>
            </div>
        </div>
    );
}
