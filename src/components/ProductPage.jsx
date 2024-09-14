import { useState } from "react"
import { FaStar } from "react-icons/fa";
import { products } from '../Data/Global'

export default function ProductPage() {
    const [toggle, setToggle] = useState(false);
    return (
        <section className="">
            <div className=" w-[95%] px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">
                    <div className="block xl:hidden">
                        <input id="checkbox" type="checkbox" />
                        <label className="toggle" for="checkbox" onClick={() => { setToggle(!toggle) }}>
                            <div id="bar1" className="bars"></div>
                            <div id="bar2" className="bars"></div>
                            <div id="bar3" className="bars"></div>
                        </label>
                    </div>
                    <div className={`space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 mt-5 xl:mt-0 ${toggle ? "block xl:block" : "hidden xl:block"} `}>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item1" /></span><span><label className="cursor-pointer" htmlFor="item1" >Jackets & Coats</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item2" /></span><span><label className="cursor-pointer" htmlFor="item2" >Hoodies</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item3" /></span><span><label className="cursor-pointer" htmlFor="item3" >T-shirts & Vests</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item4" /></span><span><label className="cursor-pointer" htmlFor="item4" >Shirts</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item5" /></span><span><label className="cursor-pointer" htmlFor="item5" >Blazers & Suits</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item6" /></span><span><label className="cursor-pointer" htmlFor="item6" >Jeans</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item7" /></span><span><label className="cursor-pointer" htmlFor="item7" >Trousers</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item8" /></span><span><label className="cursor-pointer" htmlFor="item8" >Shorts</label></span></a>
                        <a href="#" className="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item9" /></span><span><label className="cursor-pointer" htmlFor="item9" >Underwear</label></span></a>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div className="flex items-center justify-between text-lg  ">
                            <p className="text-slate-700">6 Items</p>
                            <div className="flex items-center gap-3">
                                <p className="font-semibold text-slate-700">Sort</p>
                                <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                    <option value="#">none</option>
                                    <option value="#">Size</option>
                                    <option value="#">Price</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {
                                products.map(
                                    (data, key) => {
                                        return (
                                            <div className="shadow hover:shadow-xl w-[210px] overflow-hidden group cursor-pointer rounded-sm">
                                                <div className="h-[160px] overflow-hidden">
                                                    <img src={data.photo} alt="" className="transition-all group-hover:scale-[1.15] aspect-[3/2] object-contain" />
                                                </div>
                                                <div className="px-2">
                                                    <div className="">
                                                        <h2 className="text-lg font-semibold">{data.name}</h2>
                                                        <p className="font-bold tracking-wider text  flex gap-4 items-center"> <strike className='text-slate-500'>{data.prevPrice}</strike> <span>{data.price}</span></p>
                                                    </div>
                                                    <div className="flex gap-1 text-yellow-400 my-2">
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
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }






                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}