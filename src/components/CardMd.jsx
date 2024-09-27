import { Link } from "react-router-dom"
import "../App.css"
import { FaStar } from "react-icons/fa"

export default function CardMd({ id, image, prevprice, price, name, ratings }) {
    return (
        <div className="shadow hover:shadow-xl  group cursor-pointer rounded-sm ">
            <div className="w-[80%] sm:h-[160px]  flex justify-center items-center mx-auto">
                <img src={image} alt="" className="transition-all w-full group-hover:scale-[1.15] aspect-[2/1] sm:aspect-[3/2] object-contain" />
            </div>
            <div className="px-2">
                <div className="my-2">
                    <h2 className="sm:text-lg font-semibold">{name}</h2>
                    <p className="font-bold tracking-wider flex gap-5 items-center text-xs sm:text-sm"> <span>{price}</span> </p>
                </div>
                <div className="flex gap-1 text-xs sm:text-base text-yellow-400  pb-1">
                    {
                        [...Array(5)].map(
                            (data, key) => {
                                return (
                                    <span key={key}><FaStar /></span>
                                )
                            }
                        )
                    }

                </div>
                <p className="text-gray-500 pb-2">{"("} {ratings} ratings {")"}</p>
            </div>
        </div>
    )
}