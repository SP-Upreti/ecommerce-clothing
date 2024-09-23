export default function Partners() {
    return (
        <section className="bg-[#E2F4FF] w-[90%] mx-auto p-5 py-10">
            <div className="grid grid-cols-2 gap-y-20 gap-10 md:grid-cols-3 justify-center items-center content-evenly">
                {
                    [...Array(6)].map(
                        (src, key) => {
                            src = `brand-${key + 1}.png`
                            return (
                                <div className="mx-auto" key={key}>
                                    <img src={src} alt="" className="w-[150px] lg:w-[200px] " />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}