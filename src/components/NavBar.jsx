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

export default function NavBar() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <nav className="border border-slate-300 p-3 pb-2 px-12 flex justify-between items-center">
            <div className="flex gap-[8rem] items-center">
                <div className="logo">
                    <Link to={'/'}>
                        <img src="/B-Bazar.png" alt="Logo" className="" />
                    </Link>
                </div>
                <div className="menu">
                    <ul className="flex gap-10 items-center">
                        <li className={`items ${activePath === "/" ? "active" : "text-slate-400 "} min-w-[140px] `}>
                            <Link to="/" className="flex gap-2 text-xl items-center">
                                <span>
                                    <FontAwesomeIcon icon={faHome} />
                                </span>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/products" ? "active" : "text-slate-400"} min-w-[140px] `}>
                            <Link to="/products" className="flex gap-2 text-xl items-center ">
                                <span>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </span>
                                <span>Products</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/about" ? "active" : "text-slate-400"} min-w-[140px] `}>
                            <Link to="/about" className="flex gap-2 text-xl items-center ">
                                <span>
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </span>
                                <span>About</span>
                            </Link>
                        </li>
                        <li className={`items ${activePath === "/contact" ? "active" : "text-slate-400"} min-w-[140px] `}>
                            <Link to="/contact" className="flex gap-2 text-xl items-center ">
                                <span>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="flex gap-10 items-center">
                <Link to="/login">
                    <li className="cursor-pointer">
                        <FontAwesomeIcon icon={faRightToBracket} className="text-2xl text-slate-500" />
                    </li>
                </Link>
                <Link to={'/cart'}>
                    <li className="w-fit relative">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-slate-500" />
                        <span className="absolute h-[22px] w-[22px] bg-green-500 flex justify-center items-center text-white rounded-full overflow-hidden top-[-10px] right-[-10px]">
                            <span>8</span>
                        </span>
                    </li></Link>
            </ul>
        </nav>
    );
}
