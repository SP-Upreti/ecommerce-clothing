export default function CardSm({ title, image, price, items }) {
    return (
        <div className=" w-[250px] sm:w-[370px] border border-slate-300 h-[120px] p-4 flex gap-4 items-center">
            <div className="">
                <img src={image} alt="" className="w-[80px]" />
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p >{price}</p>
                <p className="font-semibold "><span>{`(${items} items in stock)`}</span></p>
            </div>
        </div>
    )
}