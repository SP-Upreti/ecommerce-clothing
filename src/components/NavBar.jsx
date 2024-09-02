import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faBagShopping,
    faHome,
    faPhoneAlt,
    faRightToBracket,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <nav className={`border border-slate-300 p-3 pb-2 sm:px-12 flex justify-between lg:items-center relative ${toggle ? 'h-screen' : 'h-auto'} lg:h-auto  bg-white`}>
            <div className="flex gap-[8rem] lg:items-center">
                <div className="logo">
                    <Link to={'/'}>
                        <img src="/B-Bazar.png" alt="Logo" className="w-[80px] md:w-auto" />
                    </Link>
                </div>
                <div className={`menu hidde ${toggle ? 'flex' : 'hidden'} lg:flex`}>
                    <ul className={` ${toggle ? 'absolute' : 'relative'}  top-[10%] left-5 z-[9] bg-white lg:relative  flex flex-col lg:flex-row gap-10 items-center`}>
                        <li className={`items ${activePath === "/" ? "active" : "text-slate-400 "} min-w-[140px] `}>
                            <Link to="/" className="flex gap-2 lg:text-xl items-center">
                                <span>
                                    <FontAwesomeIcon icon={faHome} />
                                </span>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/products" ? "active" : "text-slate-400"} min-w-[140px] `}>
                            <Link to="/products" className="flex gap-2 lg:text-xl items-center ">
                                <span>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </span>
                                <span>Products</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/about" ? "active" : "text-slate-400"} min-w-[140px] `}>
                            <Link to="/about" className="flex gap-2 lg:text-xl items-center ">
                                <span>
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </span>
                                <span>About</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/contact" ? "active" : "text-slate-400"} min-w-[140px] `}>
                            <Link to="/contact" className="flex gap-2 lg:text-xl items-center ">
                                <span>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="flex gap-6 md:gap-10 lg:items-center z-10">
                <Link to="/login">
                    <li className="cursor-pointer">
                        <FontAwesomeIcon icon={faRightToBracket} className="md:text-2xl text-slate-500" />
                    </li>
                </Link>
                <Link to={'/cart'}>
                    <li className="w-fit relative">
                        <FontAwesomeIcon icon={faShoppingCart} className="md:text-2xl text-slate-500" />
                        <span className="absolute h-5 w-5 md:h-[22px] md:w-[22px] bg-green-500 flex justify-center items-center text-white rounded-full text-sm sm:text-base overflow-hidden top-[-10px] right-[-10px]">
                            <span>8</span>
                        </span>
                    </li>
                </Link>
                <li className="ps-4 lg:hidden" ><span onClick={() => { setToggle(!toggle) }} aria-expanded={toggle} aria-controls="menu">{toggle ? (<IoClose />) : (<FaBars />)}</span ></li>
            </ul>
        </nav>
    );
}
