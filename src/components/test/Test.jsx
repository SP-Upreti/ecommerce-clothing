import { TbTruckDelivery } from "react-icons/tb";
import { LuCrown } from "react-icons/lu";
import { RiShieldKeyholeLine } from "react-icons/ri";

export default () => {

    const features = [
        {
            icon: <TbTruckDelivery />,
            title: "Fast Delivery",
            desc: "Get your products delivered quickly with our fast and reliable shipping options. We ensure that your items arrive on time, every time."
        },
        {
            icon: <LuCrown />,
            title: "Best Quality",
            desc: "We offer the highest quality products made from premium materials, ensuring durability and long-lasting use for all your needs."
        },
        {
            icon: <RiShieldKeyholeLine />,
            title: "1-Year Warranty",
            desc: "Enjoy peace of mind with our 1-year warranty on all purchases. We're here to support you in case of any issues or concerns."
        },
    ];

    return (
        <section className="relative py-28 border">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-3xl font-semibold sm:text-4xl">
                        Experience Best Quality and Service
                    </h3>
                    <p className="mt-3">
                        Discover a seamless shopping experience with products that combine reliability, innovation, and exceptional customer care.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg text-2xl flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
    )
}
