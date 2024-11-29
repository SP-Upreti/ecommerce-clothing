"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
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
        },
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
        },
    ];

    return (
        <section className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See what others are saying about us
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
                    </p>
                </div>
                <div className="my-12">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        // navigation
                        autoplay={{ delay: 3000 }}
                        loop
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}

                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={idx} className="pb-14">
                                <div className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" alt={item.name} />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">{item.quote}</p>
                                        </blockquote>
                                    </figure>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
