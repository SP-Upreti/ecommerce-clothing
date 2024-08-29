import { Link } from "react-router-dom"
import "../App.css"

export default function CardMd({ id }) {
    return (
        <div className="border w-[275px] overflow-hidden group cursor-pointer rounded-lg">
            <div className="h-[160px] overflow-hidden">
                <img src="/keyboard.png" alt="" className="transition-all group-hover:scale-[1.4]" />
            </div>
            <div className="p-2">
                <div className="mt-3">
                    <h2 className="text-xl font-bold">High Quality Mechanical Keyboard</h2>
                    <p className="font-bold tracking-wider mt-3">Rs. 5500/-</p>
                </div>
                <div className=" flex gap-4 items-center mt-4">
                    <Link to={`/products/${id}`}><button className="bg-[--primary] border border-[--primary] text-white px-5 text-lg py-[4px] rounded-lg">Buy</button></Link>
                    <Link to={'/products/1#prod'}><button className="border border-[--primary] text-[--primary] px-5 text-lg py-[4px] rounded-lg">more</button></Link>
                </div>
            </div>
        </div>
    )
}