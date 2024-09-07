import { useState } from "react"

export default function ProductPage() {
    const [toggle, setToggle] = useState(false);
    return (
        <section class="">
            <div class=" w-[95%] px-6 py-8 mx-auto">
                <div class="lg:flex lg:-mx-2">
                    <div className="block xl:hidden">
                        <input id="checkbox" type="checkbox" />
                        <label class="toggle" for="checkbox" onClick={() => { setToggle(!toggle) }}>
                            <div id="bar1" class="bars"></div>
                            <div id="bar2" class="bars"></div>
                            <div id="bar3" class="bars"></div>
                        </label>
                    </div>
                    <div class={`space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 mt-5 xl:mt-0 ${toggle ? "block xl:block" : "hidden xl:block"} `}>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item1" /></span><span><label className="cursor-pointer" htmlFor="item1" >Jackets & Coats</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item2" /></span><span><label className="cursor-pointer" htmlFor="item2" >Hoodies</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item3" /></span><span><label className="cursor-pointer" htmlFor="item3" >T-shirts & Vests</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item4" /></span><span><label className="cursor-pointer" htmlFor="item4" >Shirts</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item5" /></span><span><label className="cursor-pointer" htmlFor="item5" >Blazers & Suits</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item6" /></span><span><label className="cursor-pointer" htmlFor="item6" >Jeans</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item7" /></span><span><label className="cursor-pointer" htmlFor="item7" >Trousers</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item8" /></span><span><label className="cursor-pointer" htmlFor="item8" >Shorts</label></span></a>
                        <a href="#" class="hover:text-[--primary] cursor-pointer text-xl   flex items-center gap-3 products"><span><input type="checkbox" className="cursor-pointer" name="" id="item9" /></span><span><label className="cursor-pointer" htmlFor="item9" >Underwear</label></span></a>
                    </div>

                    <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div class="flex items-center justify-between text-lg  ">
                            <p class="text-slate-700">6 Items</p>
                            <div class="flex items-center gap-3">
                                <p class="font-semibold text-slate-700">Sort</p>
                                <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                    <option value="#">none</option>
                                    <option value="#">Size</option>
                                    <option value="#">Price</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {
                                [...Array(12)].map(
                                    (data, key) => {
                                        return (
                                            <div key={key} class="flex flex-col items-centr justify-center w-full max-w-lg mx-auto">
                                                <div className="">
                                                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="/tractor.png" alt="T-Shirt" className="aspect-[1.5/1]" />
                                                </div>
                                                <div className="flex justify-between items-center pt-2">
                                                    <h4 class=" text-lg font-medium  ">Printed T-shirt</h4>
                                                    <p class=" font-semibold">$12.55</p></div>

                                                <div className="flex gap-2">
                                                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[--primary] rounded-md hover:bg-[--primary]  focus:outline-none ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                                        </svg>
                                                        <span class="mx-1">buy</span>
                                                    </button>
                                                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide  capitalize transition-colors duration-200 transform border-2 border-[--primary]  rounded-md  focus:outline-none text-[--primary] ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                                        </svg>
                                                        <span class="mx-1">cart</span>
                                                    </button>
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