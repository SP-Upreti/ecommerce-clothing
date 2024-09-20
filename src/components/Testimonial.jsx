import { A11y, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialData = [
    {
        name: "Ram Bahadur",
        img: "/testimonial/testimonial1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
    },
    {
        name: "Soniya Chhetri",
        img: "/testimonial/testimonial2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
    },
    {
        name: "Jung B. Magar",
        img: "/testimonial/testimonial3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
    },
    {
        name: "John Upreti",
        img: "/testimonial/testimonial4.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
    },
    {
        name: "Jane  Pathak",
        img: "/testimonial/testimonial5.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
    }
]

export default function Testimonial() {
    return (
        <div className="my-10">
            <div className="w-[90%] mx-auto ">
                <Swiper
                    modules={[A11y, Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 3000 }}

                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1
                            },
                            800: {
                                slidesPerView: 2
                            },
                            1250: {
                                slidesPerView: 3
                            }
                        }
                    }
                >
                    {
                        TestimonialData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className="border-2 border-slate-300 p-4 rounded-xl m-1">
                                    <div className="flex gap-6 items-center">
                                        <div className="outline-dashed outline-[--primary] rounded-full h-[90px] w-[90px] sm:h-[115px] sm:w-[115px] flex justify-center items-center">
                                            <div className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]  rounded-full  overflow-hidden flex justify-center items-center">
                                                <img src={data.img} alt={data.name} className='w-[120px]' />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h2 className='text-xl font-semibold'>{data.name}</h2>
                                        </div>
                                    </div>
                                    <div className="text-sm sm:text-base p-4 bg-[#E2F4FF] rounded-xl mt-4">{data.desc}</div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div >
    )
}