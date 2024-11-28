import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="flex flex-col gap-2 w-full overflow-hidden">
            <div className="">
                <Image src={"/prod1.png"} alt="alt" height={300} width={300} />
            </div>
            <div className="font-semibold ">
                <p className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
                <h2 className="text-xl text-yellow-500">Rs. 1320</h2>
            </div>
        </div>

    )
}
