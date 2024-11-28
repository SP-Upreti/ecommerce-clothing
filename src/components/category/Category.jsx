import React from 'react'

const categories = [
    {
        name: "smart watches",
        img: "/watch.png"
    },
    {
        name: "wireless Earphone",
        img: "/earphone.png"
    },
    {
        name: "wireless headphone",
        img: "/headphone.png"
    },
    {
        name: "smart phones",
        img: "/phone.png"
    },
    {
        name: "running shoe",
        img: "/shoe.png"
    },
    {
        name: "Leather items",
        img: "/leather.png"
    },
    {
        name: "smart watches",
        img: "/watch.png"
    },
    {
        name: "wireless Earphone",
        img: "/earphone.png"
    },
    {
        name: "wireless headphone",
        img: "/headphone.png"
    },
    {
        name: "smart phones",
        img: "/phone.png"
    },
    {
        name: "running shoe",
        img: "/shoe.png"
    },
    {
        name: "Leather items",
        img: "/leather.png"
    },

]

export default function Category() {
    return (
        <div className='w-[90%]  px-4 sm:py-16  sm:px-6 lg:px-8 mx-auto'>
            <div className="text-2xl font-semibold">
                <h2>Popular Categories</h2>
            </div>
            <div className="my-1 text-lg text-slate-400  flex items-center justify-between">
                <p>Choose from wide variety of Items</p>
                <button className='font-semibold'>
                    all categories {">"}
                </button>
            </div>

            <div className="flex gap-4 items-center flex-wrap mt-10">
                {
                    categories.map(
                        (data, key) => {
                            return (
                                <div className=" h-[220px] w-[12rem] bg-slate-50 flex flex-col justify-center items-center gap-4">
                                    <div className="h-[120px] w-[120px] bg-slate-300 rounded-full flex justify-center items-center">
                                        <img src={data.img} alt="" className='w-[80%]' />
                                    </div>
                                    <div className="text-xl font-semibold">
                                        <h2>{data.name}</h2>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>

        </div>
    )
}
