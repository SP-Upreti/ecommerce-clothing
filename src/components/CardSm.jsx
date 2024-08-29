export default function CardSm() {
    return (
        <div className="w-[370px] border h-[120px] p-4 flex gap-4 items-center">
            <div className="">
                <img src="/samsung.png" alt="" className="w-[80px]" />
            </div>
            <div className="">
                <h2 className="text-2xl font-bold">Smart Phones</h2>
                <p >RS. 20000/-  to Rs. 200000</p>
                <p className="font-semibold text-lg"><span>{"(20 items in stock)"}</span></p>
            </div>
        </div>
    )
}