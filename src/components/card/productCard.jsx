import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }) {
    return (
        <>
            {
                data ? (
                    <Link href={`/products/${data?.id}`} className="group block hover:shadow hover:scale-110 transition-all p-2">
                        {/* <div className="flex flex-col gap-2 w-full h-full overflow-hidden shadow">
                            <div className="relative aspect-square flex justify-center items-center h-[150px] w-[150px] overflow-hidden">
                                <Image
                                    src={data?.images[0]}
                                    alt="Product Image"
                                    className="object-cover"
                                    layout="fill"
                                    loading="lazy" // Lazy loading enabled
                                    placeholder="blur" // Placeholder enabled
                                    blurDataURL={data?.images[0]} // Small blurred version for placeholder
                                />
                            </div>
                            <div className="font-semibold px-4 pb-2">
                                <p className="font-semibold text-lg">{data?.title ? data.title : ""}</p>
                                <h2 className="text-xl text-yellow-500">Rs. {data?.price ? data.price : ""}</h2>
                            </div>
                        </div> */}
                        <img
                            src={data?.images[0]}
                            alt=""
                            className="h-[150px] w-full object-cover  sm:h-[250px] p-2"
                        />

                        <div className="">
                            <div className="">
                                <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4 sm:text-lg">
                                    {data?.title ? data.title : ""}
                                </h3>

                                <p className="text-gray-900 text-xl sm:text-2xl font-bold">Rs. {data?.price ? data.price : ""}</p>
                            </div>
                        </div>
                    </Link>
                ) :
                    (
                        <div
                            className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4"
                        >
                            <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                                <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                                <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                            </div>
                        </div>

                    )
            }
        </>
    );
}
