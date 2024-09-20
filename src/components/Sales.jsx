export default function Sales() {
    return (
        <section className="h-[200px] sm:h-[417px] overflow-hidden sm:w-[90%] mx-auto py-5 md:py-0  my-10 bg-black relative flex sm:rounded-xl justify-center md:justify-end md:items-center text-white sm:pe-16">
            <img src="/tuxedo.png" alt="tuxedo" className="absolute bottom-[0%] left-0 sm:left-[5%] w-[150px] sm:w-[500px]" />
            <div className="text-center">
                <div className="">
                    <h2 className="font-bold text-[] sm:text-3xl">Shelton Slim-Fit Velvet Tuxedo Jacket</h2>
                    <h2 className="font-bold text-2xl sm:text-3xl">upto 40% off</h2>
                </div>
                <div className="ms-20 mt-12 md:mt-5 ">
                    <button className="px-4 py-1 text-lg capitalize bg-yellow-500 text-white rounded-lg">shop now</button>
                </div>
            </div>
        </section>
    )
}