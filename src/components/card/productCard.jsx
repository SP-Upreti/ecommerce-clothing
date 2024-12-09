import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ data }) {
    return (
        <>
            {
                data ? (
                    <Link href={`/products/${data?.id}`} className="group block hover:shadow  transition-all p-2">
                        <Image
                            src={data?.images[0]}
                            alt={data?.title || "Product image"}
                            width={500}
                            height={500}
                            className="h-[150px] w-full object-cover sm:h-[250px] p-2 group-hover:scale-110"
                            placeholder="blur"
                            blurDataURL="/placeholder.jpg" // Ensure the path to `placeholder.jpg` is correct
                            priority={true} // Use true for critical images
                            loading="eager" // Use "lazy" for non-critical images
                            onError={() => console.log('Image failed to load')} // Handle image loading errors
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
