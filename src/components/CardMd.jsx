import { Link } from "react-router-dom"
import "../App.css"
import { FaStar } from "react-icons/fa"

export default function CardMd({ id, image, prevprice, price, name }) {
    return (
        <div className="shadow hover:shadow-xl w-[48%] sm:w-[229px] overflow-hidden group cursor-pointer rounded-sm">
            <div className="sm:h-[160px] overflow-hidden">
                <img src={image} alt="" className="transition-all group-hover:scale-[1.15] aspect-[2/1] sm:aspect-[3/2] object-contain" />
            </div>
            <div className="px-2">
                <div className="my-2">
                    <h2 className="sm:text-lg font-semibold">{name}</h2>
                    <p className="font-bold tracking-wider flex gap-5 items-center text-xs sm:text-sm"><span className="text-gray-400"><strike>{prevprice}</strike></span> <span>{price}</span> </p>
                </div>
                <div className="flex gap-1 text-xs sm:text-base text-yellow-400  pb-1">
                    {
                        [...Array(5)].map(
                            (data, key) => {
                                return (
                                    <span><FaStar /></span>
                                )
                            }
                        )
                    }

                </div>
                <p className="text-gray-500 mb-4">{id * 2 + (3)} reviews</p>
            </div>
        </div>
    )
}