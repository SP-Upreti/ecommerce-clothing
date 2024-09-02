import { FaDiscord, FaEnvelope, FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[--primary] p-4 sm:p-10 text-white  overflow-hidden">
            <div className="flex justify-between gap-10 flex-wrap sm:w-[90%] mx-auto">
                <div className="sm:w-[350px] flex flex-col gap-4">
                    <div className="">
                        <p className="text-3xl font-bold font-[roboto]">B-Bazar</p>
                    </div>
                    <p className="text-slate-400">
                        Lorem ipsum dolor sit amet consectetur adipisng elit. Sed, minus! A similique obcaecati omnijhbhs consectetur et atque doloremque quo tempjhore dolorum, nam, aliquid vero repudiandae, culpuga amet eius ea provident.
                    </p>
                    <div className="flex gap-5 items-center text-3xl mt-4">
                        <span><FaFacebook /></span>
                        <span><FaInstagram /></span>
                        <span><FaEnvelope /></span>
                        <span><FaDiscord /></span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold ">Subscribe us</h2>
                    <div className="flex items-center flex-wrap bg-yellow-400 text-2xl rounded-md overflow-hidden">
                        <input type="email" name="" id="" placeholder="upreti@gmail.com" className="  border-2  py-1 text-black px-2" />
                        <div className="px-3  ">
                            <FaPaperPlane />
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[320px]">
                        <p className="text-lg text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis disti nctio voluptatem quod ipsa, alias accusa mus ullam architecto vitae. Suscipit.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-2">Navigate</h2>
                    <ul className="text-xl text-slate-400 font-semibold flex flex-col gap-4">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Contacs</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-2">Help Center</h2>
                    <ul className="text-xl text-slate-400 font-semibold flex flex-col gap-4">
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