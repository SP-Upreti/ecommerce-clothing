import React from 'react'

export default function Sale() {
    return (
        <section className="  h-[415px] bg-black relative overflow-hidden max-w-7xl mx-auto">
            <img src="/laptop2.png" alt="" className='w-full' />
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-8 justify-center items-center text-center w-fit   px-10">
                <div className="px-4 py-2 w-fit bg-yellow-500 text-white rounded-full">new laptop</div>
                <div className="">
                    <h2 className='text-3xl font-bold text-[#2E8FC5]'>Sale up to 50% off</h2>
                    <p className='text-white'>12 inch HD display</p>
                </div>
                <div className="">
                    <button className='px-4 py-2 w-fit bg-yellow-600 text-white rounded-lg text-xl capitalize'>shop now</button>
                </div>
            </div>

        </section>
    )
}
