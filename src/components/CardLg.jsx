import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'
import { FaCheck, FaCheckCircle } from "react-icons/fa";

export default function CardLg({ title, features, img }) {
    return (
        <div className="mx-auto h-fit  screen-920:h-[400px]  relative  overflow-hidden bg-gradient-to-r from-[#0c4760] to-[#1d7d7d]">
            <div className="flex text-white justify-between gap-4 md:gap-10 h-full p-2 py-8 md:p-8 flex-col-reverse md:flex-row">
                <div className="sm:w-[60%] flex flex-col  justify-center h-full ">
                    <h2 className="text-2xl md:text-3xl font-bold ">Polo Wool Flannel 3-Piece Suit</h2>
                    <p className="text-xl">Polo Ralph Lauren</p>
                    <div className="flex gap-4 md:gap-4 items-center my-1 sm:my-3 md:text-lg font-semibold">
                        <span className="flex gap-2 items-center"><FaCheckCircle className="" /><span>Free Delivery</span></span>
                        <span className="flex gap-2 items-center"><FaCheckCircle className="" /><span>Warranty Available</span></span>
                    </div>
                    <p className="hidden screen-920:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam voluptatem voluptatibus vero quasi ut dolore similique illo, cumque ab blanditiis nam, fuga in, porro nobis nemo dolores ipsum maiores obcaecati.</p>
                    <div className="pt-4 sm:pt-10 flex gap-5 items-center">
                        <button className="border-2 bg-white  text-black md:text-xl font-semibold px-5 py-2 rounded-full capitalize">buy now</button>
                        <button className="border-2  text-white md:text-xl font-semibold px-5 py-2 rounded-full capitalize">read more</button>
                    </div>
                </div>
                <div className="sm:w-[40%] flex justify-center items-center">
                    <div className="relative h-[200px] screen-900:h-[340px] overflow-hidden md:overflow-visible">
                        <div className="absolute md:top-[50%] md:left-[-20%] flex flex-col bg-yellow-500 text-white h-[75px] w-[75px] screen-900:h-[120px] screen-900:w-[120px] rounded-full  justify-center items-center "><span className="text-2xl screen-900:text-4xl font-bold">20%</span><span className="text-lg screen-900:text-3xl leading-4">off</span></div>
                        <img src="https://www.freeiconspng.com/uploads/men-business-suit-png-33.png" alt="" className="screen-920:h-[620px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}