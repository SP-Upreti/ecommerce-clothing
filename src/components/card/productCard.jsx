import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="max-w-[15rem] ">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                <div className="py-4 px-4 rounded-lg bg-white">
                    <h1 className="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">I'm supper dog for you.</h1>
                    <p className="text-gray-700 tracking-wide flex gap-1 items-center">
                        {
                            [...Array(5)].map(
                                (data, key) => {
                                    return (
                                        <span key={key}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                fill={"yellow"} // Gold for filled, light gray for empty
                                                stroke="yellow"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    d="M12 2.25l3.09 6.26L22 9.34l-5 4.87 1.18 6.91L12 17.77l-6.18 3.35L7 14.21l-5-4.87 6.91-1.07L12 2.25z"
                                                />
                                            </svg>
                                        </span>
                                    )
                                }
                            )
                        }
                    </p>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                    <span className="text-md font-semibold">$150</span>
                </div>
            </div>
        </div>
    )
}
