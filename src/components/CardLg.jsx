import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'

export default function CardLg({ title, features, img }) {
    return (
        <div className="sm:w-[80%] mb-4 flex justify-between items-center mx-auto sm:border-2 sm:border-gray-300  p-4 sm:p-8 flex-col-reverse lg:flex-row">
            <div className="">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
                <ul className="mt-5 flex flex-col gap-2 sm:gap-3 text-sm sm:text-lg">
                    {
                        features.map(
                            (feat, key) => {
                                return (
                                    <li key={key} className="flex gap-2 items-center "><span className="text-[var(--primary)]"><FontAwesomeIcon icon={faCircleCheck} /></span><span>{feat}</span></li>
                                )
                            }
                        )
                    }
                </ul>
                <div className="mt-5 sm:mt-10 flex gap-8 items-center">
                    <button className="bg-[--primary] text-white px-5 text-lg py-1 rounded-md">Buy Now</button>
                    <button className="text-[--secondary] border border-[--secondary]  px-5 text-lg py-1 rounded-md">more info</button>
                </div>
            </div>
            <div className="h-[250px] sm:h-auto  mb-2 overflow-hidden sm:w-[400px] ">
                <img src={img} alt={img} className="h-full" />
            </div>
        </div>
    )
}