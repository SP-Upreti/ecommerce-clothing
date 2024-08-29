import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'

export default function CardLg({ text, price, photo }) {
    return (
        <div className="w-[80%] flex justify-between items-center mx-auto border p-4 flex-col-reverse lg:flex-row">
            <div className="">
                <h2 className="text-2xl font-bold"> Beautiful Cannon Camera</h2>
                <ul className="mt-5 flex flex-col gap-3 text-lg">
                    <li className="flex gap-2 items-center "><span className="text-[var(--primary)]"><FontAwesomeIcon icon={faCircleCheck} /></span><span>DIGIC 8 processor</span></li>
                    <li className="flex gap-2 items-center "><span className="text-[--primary]"><FontAwesomeIcon icon={faCircleCheck} /></span><span>Dual Pixel CMOS AF</span></li>
                    <li className="flex gap-2 items-center "><span className="text-[--primary]"><FontAwesomeIcon icon={faCircleCheck} /></span><span>6.5 fps Continuous shooting</span></li>
                    <li className="flex gap-2 items-center "><span className="text-[--primary]"><FontAwesomeIcon icon={faCircleCheck} /></span><span>4K (cropped) movie at up to 24 fps and Full HD movie at up to 60 fps</span></li>
                </ul>
                <div className="mt-10 flex gap-8 items-center">
                    <button className="bg-[--primary] text-white px-5 text-lg py-1 rounded-md">Buy Now</button>
                    <button className="text-[--secondary] border border-[--secondary]  px-5 text-lg py-1 rounded-md">more info</button>
                </div>
            </div>
            <div className=" h-[400px] ">
                <img src="/camera.png" alt="" className="h-full" />
            </div>
        </div>
    )
}