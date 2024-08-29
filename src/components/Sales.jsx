export default function Sales() {
    return (
        <section className="h-[417px] rounded-3xl overflow-hidden my-16 relative flex justify-end items-center px-[9rem]">

            <div className="z-[99] text-white">
                <h2 className="text-3xl font-bold">Sales upto 50% off</h2>
                <h3 className="text-xl text-center">12 inch HD Display</h3>

                <div className=" flex gap-4 justify-center items-center mt-8">
                    <button className="bg-purple-500 border border-purple-500 text-white px-5 text-lg py-[4px] rounded-lg">Buy</button>
                    <button className="border border-purple-500 text-white px-5 text-lg py-[4px] rounded-lg">more</button>
                </div>
            </div>

            <img src="/sale.png" alt="" className="w-screen absolute top-0 left-0 z-[-1] " />
        </section>
    )
}