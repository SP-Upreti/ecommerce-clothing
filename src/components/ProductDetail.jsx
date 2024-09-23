import { CiStar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


export default function Details() {
    const [qty, setQty] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="p-4 sm:p-10" id="prod">
            <div className="sm:flex gap-10">
                <div className="">
                    <div className="sm:w-[650px] sm:h-[450px] flex justify-center items-center  bg-[#ededed9a] rounded-md overflow-hidden">
                        <img src="/category/shoe.png" alt="" className="w-[90%] " />
                    </div>
                    <div className="mt-4 flex gap-4">
                        <div className="sm:w-[120px]  sm:h-[100px] flex justify-center items-center  bg-[#ededed9a]">
                            <img src="/category/shoe.png" alt="" className="w-[80%] mx-auto" />
                        </div>
                        <div className="sm:w-[120px]  sm:h-[100px] flex justify-center items-center  bg-[#ededed9a]">
                            <img src="/shoe2.png" alt="" className="w-[80%] mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-max mt-6 md:mt-0 ">
                    <h2 className="text-xl sm:text-4xl font-bold">Air Jordan e32</h2>
                    <p className="text-2xl font-bold font-[calibri]">$ 3499</p>
                    <div className="flex gap-1 items-center sm:text-4xl text-yellow-500 sm:mt-4">
                        <span className=""><FaStar /> </span>
                        <span className=""><FaStar /></span>
                        <span className=""><FaStar /></span>
                        <span className=""><FaStar /></span>
                        <span><CiStar /></span>
                        <span className="sm:text-xl text-black">{"(29)"}</span>
                    </div>
                    <p className="flex gap-4 items-center text-lg">
                        <span className="font-semibold">Availability:</span>
                        <span className="flex gap-1 items-center text-green-500"><FaCheck /> <span>in stock</span></span>
                    </p>
                    <p className="text-slate-500 ">Hurry up! only 22 products left in stock</p>
                    <div className="border-2  my-2 mt-"></div>
                    <div className="flex gap-5 items-center">
                        <p className="sm:text-2xl font-semibold  sm:min-w-[110px]">Color: </p>
                        <div className="flex gap-2 items-center">
                            <p className="flex">
                                <span className="h-[20px] w-[20px] rounded-full bg-yellow-500 border-2 border-black"></span>
                            </p>
                            <p className="flex">
                                <span className="h-[20px] w-[20px] rounded-full bg-red-500"></span>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="sm:text-2xl font-semibold sm:min-w-[110px]">Size: </p>
                        <div className="flex gap-2 items-center text-lg font-bold">
                            <button className="border w-[40px] bg-blue-500 text-white">sm</button>
                            <button className="border w-[40px]">md</button>
                            <button className="border w-[40px]">xl</button>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="sm:text-2xl font-semibold sm:min-w-[110px]">Quantity: </p>
                        <div className="flex  items-center text-lg">
                            <button className="border w-[35px]">-</button>
                            <button className=" w-[35px] font-bold">1</button>
                            <button className="border w-[35px]">+</button>
                        </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 items-center mt-4 sm:mt-10">
                        <button className="border-2 border-cyan-600 bg-cyan-600 text-white px-4 sm:px-0 sm:w-[200px] text-xl  py-1 sm:py-2 rounded-full capitalize">buy now</button>
                        <button className="border-2 border-cyan-600 text-cyan-600 px-4 sm:px-0  sm:w-[200px] text-xl py-1 sm:py-2 rounded-full capitalize">add cart</button>
                    </div>
                    <div className="my-2 flex gap-10 items-center sm:text-xl">
                        <p className="font-bold">30% off</p>
                        <p>Valid till 2024-08-20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}