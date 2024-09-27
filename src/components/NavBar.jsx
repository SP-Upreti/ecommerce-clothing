import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/products")
    }

    return (
        <nav className="bg-slate-300 px-4 sm:px-20 py-2 ">
            <div className="flex justify-end">
                <ul className="flex gap-5 sm:gap-8 font-semibold text-xs sm:text-base overflow-auto ">
                    <Link to={""}><li className="hover:text-[#3c3c3c]">Become Seller</li></Link>
                    <Link to={""}><li className="hover:text-[#3c3c3c]">Help & Support</li></Link>
                    <Link to={""}><li className="hover:text-[#3c3c3c]">login</li></Link>
                    <Link to={""}><li className="hover:text-[#3c3c3c]">Signup</li></Link>
                </ul>
            </div>
            <div className="flex sm:justify-between items-center my-2 mt-4 ">
                <div className="logo hidden sm:block">
                    <Link to={"/"}><img src="/fashionwear.svg" alt="" className="w-[160px]" /></Link>
                </div>
                <div className="">
                    <form method="post" onSubmit={handleSubmit} className="w-[95%] sm:w-fit bg-[--primary] flex">
                        <input type="text" placeholder="search items" name="" id="" className="w-full sm:w-96 h-full p-[5px] sm:p-2 text-lg outline-none" required autoFocus />
                        <button className=" px-4 text-white" ><FaSearch /></button>
                    </form>
                </div>
                <div className="text-3xl text-[#0c4760] cursor-pointer hover:text-[#3055cf]">
                    <span><FaShoppingCart /></span>
                </div>
            </div>
        </nav >
    );
}
