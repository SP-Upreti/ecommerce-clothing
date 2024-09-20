export default function Partners() {
    return (
        <section className="bg-[#E2F4FF] w-[90%] mx-auto p-5 py-10">
            <div className="flex justify-center md:justify-between gap-10 items-center flex-wrap">
                {
                    [...Array(5)].map(
                        (src, key) => {
                            src = `brand-${key + 1}.png`
                            return (
                                <div className="" key={key}>
                                    <img src={src} alt="" className="w-[150px] lg:w-[200px]" />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}