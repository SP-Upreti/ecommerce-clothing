"use client";
import Image from "next/image";
import { AppContext } from "@/context/appContext";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Details({ id }) {
    const { prodDetail, productDetail, loading } = useContext(AppContext);
    const [mainImage, setMainImage] = useState(productDetail.thumbnail);

    const changeImage = (src) => {
        setMainImage(src);
    };

    const addToLocalstorage = (item) => {

        try {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            console.log(cartItems, item)
            if (cartItems.some(element => element.id === item.id)) {

                toast.error("item already in cart");
                return;
            }
            else {
                cartItems.push(item);
                localStorage.setItem("cartItems", JSON.stringify(cartItems))
                toast.success("item added to cart")
            }
        }
        catch (err) {
            toast.error(err.message)
        }
    }

    useEffect(() => {
        async function fetchDetails() {
            if (id) {
                await prodDetail(id);
            }
        }
        fetchDetails();
    }, [id]);

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                {
                    loading ?
                        (
                            <section className="flex items-center justify-center h-[60vh] w-full ">
                                <div className="dot animate-pulse-custom"></div>
                                <div className="dot animate-pulse-custom animation-delay-300"></div>
                                <div className="dot animate-pulse-custom animation-delay-500"></div>
                                <div className="dot animate-pulse-custom animation-delay-700"></div>
                                <div className="dot animate-pulse-custom animation-delay-900"></div>
                            </section>
                        ) : (
                            <div className="flex flex-wrap -mx-4">
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 px-4 mb-8">
                                    <div className="xl:h-[25rem] overflow-hidden flex justify-center items-center bg-slate-200">
                                        {productDetail?.images?.length > 0 &&
                                            productDetail.images.map((src, index) => (
                                                index == 0 && (
                                                    <Image
                                                        key={index}
                                                        src={src}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        height={500}
                                                        width={500}
                                                        className=" object-cover rounded-md cursor-pointer  transition duration-300"
                                                        onMouseOver={() => setMainImage(src)}
                                                        blurDataURL="/placeholder.jpg"
                                                        priority={true}
                                                        loading="eager"
                                                        style={{ width: "90%" }}
                                                        onError={() => console.log('Image failed to load')}
                                                    />
                                                )
                                            ))}

                                    </div>
                                    <div className="flex gap-4 py-4 justify-center overflow-x-auto">

                                        {/* Thumbnail Images */}
                                        {productDetail?.images?.map((src, index) => (
                                            <Image
                                                key={index}
                                                width={100}
                                                height={100}
                                                src={src}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-16 h-16 sm:w-20 border bg-slate-300 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                                onMouseOver={() => setMainImage(src)}
                                                quality={30}
                                                blurDataURL="/placeholder.jpg" // Ensure the path to `placeholder.jpg` is correct
                                                priority={true} // Use true for critical images
                                                loading="eager" // Use "lazy" for non-critical images
                                                onError={() => console.log('Image failed to load')} // Handle image loading errors
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="w-full md:w-1/2 px-4">
                                    <h2 className="text-3xl font-bold mb-2">{productDetail?.title}</h2>
                                    <p className="text-gray-600 mb-4">SKU:{productDetail.sku}</p>
                                    <div className="mb-4">
                                        <span className="text-2xl font-bold mr-2">${productDetail.price}</span>
                                        <span className="text-gray-500 line-through">
                                            ${(productDetail.price * (1 + productDetail.discountPercentage / 100)).toFixed(2)}
                                        </span>

                                    </div>
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 text-yellow-500"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                        <span className="ml-2 text-gray-600">{productDetail.rating} ({productDetail?.reviews?.length} reviews)</span>
                                    </div>
                                    <p className="text-gray-700 mb-6">{productDetail.description}
                                    </p>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold mb-2">Dimension:</h3>
                                        <div className="flex space-x-2">
                                            <span>w:{productDetail.dimensions?.width}  h:{productDetail.dimensions?.height}  d:{productDetail.dimensions?.depth}</span>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                            Quantity:
                                        </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="1"
                                            defaultValue="1"
                                            className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                    <div className="flex gap-4 flex-wrap mb-6">
                                        <button
                                            onClick={() => { addToLocalstorage(productDetail) }}
                                            className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                                />
                                            </svg>
                                            Add to Cart
                                        </button>
                                        <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M7.5 15.75V5.852c0-.912 1.175-1.365 1.758-.721L12 8.25l2.742-3.12c.583-.645 1.758-.19 1.758.721v9.898M3 19.5h18"
                                                />
                                            </svg>
                                            Add to Wishlist
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                        <ul className="list-disc list-inside text-gray-700">
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
}
