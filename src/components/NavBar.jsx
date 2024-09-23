import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";


export default function NavBar() {
    return (
        <nav className="bg-slate-300 px-4 sm:px-20 py-2 ">
            <div className="flex justify-end">
                <ul className="flex gap-5 sm:gap-8 font-semibold text-xs sm:text-base overflow-auto ">
                    <li>Become Seller</li>
                    <li>Help & Support</li>
                    <li>login</li>
                    <li>Signup</li>
                </ul>
            </div>
            <div className="flex sm:justify-between items-center my-2 mt-4 ">
                <div className="logo hidden sm:block">
                    <img src="/fashionwear.svg" alt="" className="w-[160px]" />
                </div>
                <div className="">
                    <form action="" className="w-[95%] sm:w-fit bg-[--primary] flex">
                        <input type="text" placeholder="search items" name="" id="" className="w-full sm:w-96 h-full p-[5px] sm:p-2 text-lg outline-none" />
                        <button className=" px-4 text-white" ><FaSearch /></button>
                    </form>
                </div>
                <div className="text-3xl text-[#0c4760] cursor-pointer">
                    <span><FaShoppingCart /></span>
                </div>
            </div>
        </nav>
    );
}
