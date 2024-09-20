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


export default function News() {
    return (
        <section className='py-10'>
            <div className="flex justify-between items-center w-[90%] mx-auto py-4">
                <h2 className="text-2xl font-bold text-[#1B5A7D]">Latest News</h2>
                <div className="text-[#1B5A7D] text-xl"><button>View all</button></div>
            </div>
            <div className="flex gap-10 w-[90%] mx-auto">
                <Swiper
                    modules={[A11y, Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        1050: {
                            slidesPerView: 2
                        }
                    }}
                // autoplay={{ delay: 3000 }}
                >
                    {
                        TestimonialData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className="border-2 border-slate-300  sm:p-4 rounded-xl m-1 flex flex-col sm:flex-row justify-between screen-1100:justify-center  sm:items-center gap-4 sm:gap-8">
                                    <div className="sm:w-[250px] xl:w-[320px]">
                                        <img src="/blog1.png" alt="" />
                                    </div>
                                    <div className="sm:w-[50%] p-2 sm:p-0">
                                        <h3 className='xl:text-xl'>jun 30 - 2024</h3>
                                        <h2 className=' xl:text-xl font-bold text-[#1B5A7D] mt-2 sm:mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing.?</h2>
                                        <p className='mt-1 text-sm xl:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officiis sint. Facere saepe quae rerum fugit, quia recusandae provident eveniet!</p>
                                        <p className='mt-4 font-semibold'>- By Thomas Upreti</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}