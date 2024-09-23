
export default function CardSm({ title, image, price, items }) {
    return (
        <div className="screen-425:px-8 sm:px-4 gap-4 mx-auto    sm:p-4 flex sm:gap-4 justify-center sm:justify-between items-center transition-all  cursor-pointer hover:scale-[1.05]
        w-[200px] h-[120px] border-2  border-gray-300
        overflow-hidden
        relative
        "
        >
            <div className="w-[50%] overflow-hidden">
                <img src={image} alt="" className="h-[100px]" />
            </div>
            <div className="flex flex-col gap-1 w-[50%]">
                <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
                <p className="text-sm sm:text-base md:text-lg">{price}</p>
                <p className="font-semibold text-sm sm:text-base "><span>{`(${items} items in stock)`}</span></p>
            </div>
        </div>
    )
}