export default function Sales() {
    return (
        <section className="h-[417px] text-white border overflow-hidden bg-[#123a08] my-16 relative flex justify-evenly  items-center  px-[9rem]">
            <div className=" h-[90%]">
                <img src="/sale.png" alt="" className="h-full" />
            </div>
            <div className="z-[99] ">
                <h2 className="text-3xl font-bold">Sales upto 50% off</h2>
                <h3 className="text-xl text-center">12 inch HD Display</h3>

                <div className=" flex gap-4 justify-center items-center mt-8 font-bold">
                    <button className="bg-[white] border border-[white] text-[--primary] px-5 text-lg py-[4px] rounded-lg">Buy</button>
                    <button className="border border-[white] capitalize text-[white] px-5 text-lg py-[4px] rounded-lg">more</button>
                </div>
            </div>


        </section>
    )
}