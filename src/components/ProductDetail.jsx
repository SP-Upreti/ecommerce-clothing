import { CiStar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Details() {
    const [qty, setQty] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="p-10" id="prod">
            <div className="flex gap-10">
                <div className="">
                    <div className="w-[650px] h-[550px]  border-2 rounded-md overflow-hidden">
                        <img src="/camera.png" alt="" />
                    </div>
                    <div className="mt-8 flex justify-between">
                        <div className="w-[300px] border h-[160px]">
                            <img src="/camera.png" alt="" className="h-full mx-auto" />
                        </div>
                        <div className="w-[300px] border h-[160px]">
                            <img src="/camera.png" alt="" className="h-full mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-4xl font-bold">Cannon Camera</h2>
                    <p className="text-2xl font-bold font-[calibri]">$3499</p>
                    <div className="flex gap-1 items-center text-4xl text-yellow-500 mt-4">
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                        <span><CiStar /></span>
                    </div>
                    <p className="flex gap-4 items-center text-lg">
                        <span className="font-semibold">Availability:</span>
                        <span className="flex gap-1 items-center text-green-500"><FaCheck /> <span>in stock</span></span>
                    </p>
                    <p className="text-slate-500">Hurry up! only 22 products left in stock</p>
                    <div className="my-6">
                        <hr className="border-[2px] border-slate-300" />
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-2xl font-semibold  min-w-[110px]">Color: </p>
                        <div className="flex gap-2 items-center">
                            <p className="flex">
                                <span className="h-[20px] w-[20px] rounded-full bg-yellow-500"></span>
                            </p>
                            <p className="flex">
                                <span className="h-[20px] w-[20px] rounded-full bg-red-500"></span>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-2xl font-semibold min-w-[110px]">Size: </p>
                        <div className="flex gap-4 items-center text-lg font-bold">
                            <button className="border w-[40px]">sm</button>
                            <button className="border w-[40px]">md</button>
                            <button className="border w-[40px]">xl</button>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-2xl font-semibold min-w-[110px]">Quantity: </p>
                        <div className="flex  items-center text-lg">
                            <button className="border w-[35px]">-</button>
                            <button className="border w-[35px] font-bold">1</button>
                            <button className="border w-[35px]">+</button>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center my-10">
                        <button className="bg-yellow-500 text-white  w-[200px] text-xl py-2 rounded-full capitalize">buy now</button>
                        <button className="bg-yellow-500 text-white  w-[200px] text-xl py-2 rounded-full capitalize">add to cart</button>
                    </div>
                    <div className="my-2 flex gap-10 items-center text-xl">
                        <p className="font-bold">30% off</p>
                        <p>Valid till 2024-08-20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}