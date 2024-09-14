export default function CardSm({ title, image, price, items }) {
    return (
        <div className="w-[75%] screen-425:w-fit screen-425:px-8 sm:px-4 gap-8 mx-auto sm:w-[280px] lg:w-[290px] shadow-lg h-[120px] sm:p-4 flex sm:gap-4 justify-center sm:justify-between items-center transition-all my-4 cursor-pointer hover:scale-[1.05]">
            <div className="">
                <img src={image} alt="" className="w-[80px]" />
            </div>
            <div className="">
                <h2 className="sm:text-lg md:text-2xl font-semibold">{title}</h2>
                <p className="text-xs sm:text-sm md:text-base">{price}</p>
                <p className="font-semibold text-sm sm:text-base "><span>{`(${items} items in stock)`}</span></p>
            </div>
        </div>
    )
}