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
import { FaBars, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <nav className={`border border-slate-300 p-3 lg:py-0  sm:px-12 flex ] justify-between  relative lg:h-auto  bg-[--primary   ${toggle ? 'h-screen items-start ' : 'h-auto items-center'}`}>
            <div className="flex gap-[4rem] lg:items-center ">

                <div className="logo">
                    <Link to={'/'}>
                        <span className="text-xl font-bold text-yellow-500  font-[cursive]">Ecommerce</span>
                    </Link>
                </div>

                <div className={`menu hidde ${toggle ? 'flex' : 'hidden'} lg:flex transition-all duration-500`}>
                    <ul className={` ${toggle ? 'absolute' : 'relative'}  top-[10%] left-5 z-[9]  lg:relative gap-10  flex flex-col lg:flex-row  items-center transition-all duration-700`}>
                        <li className={`items ${activePath === "/" ? "active" : "text-slate-600 "}  `}>
                            <Link to="/" className="flex gap-2 lg:text-xl items-center  active-link">
                                <span>
                                    <FontAwesomeIcon icon={faHome} />
                                </span>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/products" ? "active" : "text-slate-600"} `}>
                            <Link to="/products" className="flex gap-2 lg:text-xl items-center active-link ">
                                <span>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </span>
                                <span>Category</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/about" ? "active" : "text-slate-600"} `}>
                            <Link to="/about" className="flex gap-2 lg:text-xl items-center active-link ">
                                <span>
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </span>
                                <span>About</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/contact" ? "active" : "text-slate-600"}`}>
                            <Link to="/contact" className="flex gap-2 lg:text-xl items-center active-link ">
                                <span>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="w-[300px] relative hidden md:flex">
                <input type="text" name="" id="" placeholder="search product" className="border w-full  px-2 py-1 sm:text-lg rounded-md" />
                <div className="absolute top-[50%] right-[5%] translate-y-[-50%] cursor-pointer text-xl">
                    <button><FaSearch /></button>
                </div>
            </div>

            <ul className={`flex gap-6 md:gap-10 items-center z-10  ${toggle ? 'pt-2' : ''}`}>
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
                <li className="ps-4 lg:hidden text-slate-500 " ><span onClick={() => { setToggle(!toggle) }} aria-expanded={toggle} aria-controls="menu">{toggle ? (<IoClose className="text-[20px]" />) : (<FaBars />)}</span ></li>
            </ul>
        </nav>
    );
}
