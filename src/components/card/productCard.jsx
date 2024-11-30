import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }) {
    return (
        <Link href={"/products/1"}>
            <div className="flex flex-col gap-2 w-full overflow-hidden shadow">
                <div className="">
                    <Image src={data.images[0]} alt="alt" className="aspect-[2/2]" height={300} width={300} />
                </div>
                <div className="font-semibold px-4 pb-2">
                    <p className="font-semibold text-lg">{data.title}</p>
                    <h2 className="text-xl text-yellow-500">Rs. {data.price}</h2>
                </div>
            </div>
        </Link>

    )
}
