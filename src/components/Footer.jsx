import { FaDiscord, FaEnvelope, FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" p-4 sm:p-0 sm:pb-10   overflow-hidden">
            <div className="flex sm:justify-between gap-10 flex-wrap sm:w-[90%] mx-auto">
                <div className="sm:w-[350px] flex flex-col gap-2 sm:gap-4">
                    <div className="">
                        <p className="text-lg sm:text-2xl text-[--primary] font-bold font-[roboto]">
                            <img src="/fashionwear.svg" alt="" className="w-[150px]" />
                        </p>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisng elit. Sed, minus! A similique obcaecati omnijhbhs consectetur et atque doloremque quo tempjhore dolorum, nam, aliquid vero repudiandae, culpuga amet eius ea provident.
                    </p>
                    <div className="flex gap-5 items-center text-lg sm:text-3xl mt-4 text-[--primary]">
                        <span><FaFacebook /></span>
                        <span><FaInstagram /></span>
                        <span><FaEnvelope /></span>
                        <span><FaDiscord /></span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 sm:gap-4">
                    <h2 className="sm:text-xl font-bold ">Subscribe us</h2>
                    <div className="flex items-center  bg-[--primary]  text-xl sm:rounded-sm overflow-hidden w-fit border">
                        <input type="email" name="" id="" placeholder="example@gmail.com" className=" py-1 text-black px-2" />
                        <div className="px-3 text-white w-fit ">
                            <FaPaperPlane />
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[320px]">
                        <p className=" text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis disti nctio voluptatem quod ipsa, alias accusa mus ullam architecto vitae. Suscipit.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="sm:text-xl font-bold mb-2">Help Center</h2>
                    <ul className=" text-gray-500 font-semibold flex flex-col gap-4 text-sm sm:text-base">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Contacs</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="sm:text-xl font-bold mb-2">Help Center</h2>
                    <ul className=" text-gray-500 font-semibold flex flex-col gap-4 text-sm sm:text-base">
                        <li>Customer Care</li>
                        <li>News</li>
                        <li>Blogs</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}