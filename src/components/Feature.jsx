const Data = [
    {
        title: "free delivery",
        desc: "on order above $2000",
        icon: "/icons/delivery.svg"
    },
    {
        title: "Best Quality",
        desc: "best quality in low price",
        icon: "/icons/quality.svg"
    },
    {
        title: "1 year warranty",
        desc: "Avaliable warranty",
        icon: "/icons/warranty.svg"
    }
]
export default function Feature() {
    return (
        <div className="w-[90%] bg-[#E2F4FF] py-10 px-4 screen-900:px-10 flex justify-evenly items-center gap-10 mx-auto rounded-md flex-wrap sm:flex-nowrap">
            {
                Data.map(
                    (data, key) => {
                        return (
                            <div key={key} className="w-fit lg:w-[300px] flex flex-col screen-800:flex-row  gap-4 text-center screen-800:text-start items-center ">
                                <div className="h-[50px] w-[50px] screen-1100:w-[65px] screen-1100:h-[65px] ">
                                    <img src={data.icon} alt={data.title} className="w-full" />
                                </div>
                                <div className="">
                                    <h2 className="text-lg screen-1100:text-xl font-bold capitalize">{data.title}</h2>
                                    <p className="text-sm screen-1100:text-lg">{data.desc}</p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}