export default function Cart() {
    return (
        <div className="p-4 sm:p-10">
            <div className="flex gap-10 flex-wrap">
                <div className="">
                    <table>
                        <thead>
                            <tr className="bg-[#E2F4FF] ">
                                <th className="min-w-[150px] p-2 text-left">Product</th>
                                <th className="min-w-[150px] p-2 text-left">Price</th>
                                <th className="min-w-[150px] p-2 text-left">Quantity</th>
                                <th className="min-w-[150px] p-2 text-left">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [...Array(4)].map(
                                    (data, key) => {
                                        return (
                                            <tr className="border-b-2 border-slate-300" key={key}>
                                                <td className="p-2">
                                                    <div className="flex gap-2 flex-wrap pe-4">
                                                        <div className="w-[136px] h-[119px] border rounded-sm">
                                                            <img src="/category/shoe.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <h2 className="text-xl font-bold">Air Jordan</h2>
                                                            <p className="text-lg">Color: white</p>
                                                            <p className="text-lg">size: xl</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <span className="font-bold">$ 11,70</span>
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex  items-center text-lg">
                                                        <button className="border w-[35px]">-</button>
                                                        <button className="border w-[35px] font-bold">1</button>
                                                        <button className="border w-[35px]">+</button>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <span className="font-bold">$ 11,70</span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                    <div className="flex gap-6 items-center my-10">
                        <button className="bg-yellow-500 border-2 border-yellow-500 text-white  px-4 text-xl py-2 rounded-full capitalize">Buy More</button>
                        <button className="border-2 border-yellow-500 text-yellow-500  px-4 text-xl py-2 rounded-full capitalize">Clear Cart</button>
                    </div>
                </div>
                <div className="border-2 border-slate-400 h-fit">
                    <div className="bg-[#E2F4FF]  font-bold sm:min-w-[400px] p-2">
                        <h2 className="text-xl">Cart Total</h2>

                    </div>
                    <div className=" border-b-2 border-slate-300 flex flex-col gap-1 py-4 p-2 font-serif text-lg">
                        <p>Cart total: <span className="font-bold">$ 12000</span></p>
                        <p>Delivery Charge: <span className="font-bold">$200</span></p>
                        <p>Discount: <span className="font-bold">$200</span></p>
                    </div>
                    <div className="my-3 p-2 text-lg">
                        <h2>Total: <span className="font-bold">$ 12000</span></h2>
                    </div>
                    <div className="my-3 p-2">
                        <button className="bg-yellow-500 border-2 border-yellow-500 text-white  px-4 text-xl py-1 font-bold rounded-full capitalize">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}