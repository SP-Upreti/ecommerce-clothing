export default function CardSm({ title, image, price, items }) {
    return (
        <div className=" screen-425:w-fit screen-425:px-8 sm:px-4 gap-8 mx-auto sm:w-[280px] lg:w-[370px] border border-slate-300 h-[120px] p-4 flex sm:gap-4 justify-center sm:justify-between items-center">
            <div className="">
                <img src={image} alt="" className="w-[80px]" />
            </div>
            <div className="">
                <h2 className="text-lg md:text-2xl font-semibold">{title}</h2>
                <p className=" text-sm sm:text-base">{price}</p>
                <p className="font-semibold text-sm sm:text-base "><span>{`(${items} items in stock)`}</span></p>
            </div>
        </div>
    )
}