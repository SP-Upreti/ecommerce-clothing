"use client"
import React, { useState, useEffect } from 'react'
import Checkout from './checkout';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function Cart() {
    const [items, setItems] = useState([]);
    const [checkout, setCheckout] = useState(false);

    useEffect(() => {
        // Only access localStorage on the client-side
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Function to remove an item from the cart
    const removeItem = (index) => {
        const updatedItems = [...items];  // Clone the array to avoid direct mutation
        updatedItems.splice(index, 1);  // Remove item at the given index
        setItems(updatedItems);  // Update the state
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));  // Update localStorage
        toast.success("Item removed");
    };

    return (
        <div>
            {
                checkout ? (
                    <div className="">
                        <Checkout onCancel={() => { setCheckout(false) }} />
                    </div>
                ) :
                    (
                        <div className="container mx-auto mt-10">
                            <div className="sm:flex shadow-md my-10">
                                <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                                    <div className="flex justify-between border-b pb-8">
                                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                        <h2 className="font-semibold text-2xl">{items.length} Items</h2>
                                    </div>
                                    {
                                        items.length > 0 && items.map((data, key) => {
                                            return (
                                                <div key={key} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
                                                    <div className="md:w-4/12 2xl:w-1/4 w-full max-h-[250px] overflow-hidden">
                                                        <img src={data?.images[0]} alt="Product Image" className="h-full object-center object-cover md:block " loading='eager' />
                                                    </div>
                                                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{data.sku}</p>
                                                        <div className="flex items-center justify-between w-full">
                                                            <p className="text-base font-black leading-none text-gray-800">{data.title}</p>
                                                            <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                                <option>01</option>
                                                                <option>02</option>
                                                                <option>03</option>
                                                            </select>
                                                        </div>
                                                        <p className="text-xs leading-3 text-gray-600 pt-2">Height: {data.dimensions.height}</p>
                                                        <p className="text-xs leading-3 text-gray-600 pt-2">Width: {data.dimensions.width}</p>
                                                        <p className="w-96 text-xs leading-3 text-gray-600 pt-2">Return Policy: {data.returnPolicy}</p>
                                                        <div className="flex items-center justify-between pt-5">
                                                            <div className="flex itemms-center">
                                                                <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                                                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => removeItem(key)}>Remove</p>
                                                            </div>
                                                            <p className="text-base font-black leading-none text-gray-800">{data.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    <Link href={'/#products'} className="flex font-semibold text-indigo-600 text-sm mt-10">
                                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                            <path
                                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                        </svg>
                                        Continue Shopping
                                    </Link>
                                </div>
                                {
                                    items.length > 0 && (
                                        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
                                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                                            <div className="flex justify-between mt-10 mb-5">
                                                <span className="font-semibold text-sm uppercase">Items {items.length}</span>
                                                <span className="font-semibold text-sm">590$</span>
                                            </div>
                                            <div>
                                                <label className="font-medium inline-block mb-3 text-sm uppercase">
                                                    Shipping
                                                </label>
                                                <select className="block p-2 text-gray-600 w-full text-sm">
                                                    <option>Standard shipping - $10.00</option>
                                                </select>
                                            </div>
                                            <div className="py-10">
                                                <label
                                                    htmlFor="promo"
                                                    className="font-semibold inline-block mb-3 text-sm uppercase"
                                                >
                                                    Promo Code
                                                </label>
                                                <input
                                                    type="text"
                                                    id="promo"
                                                    placeholder="Enter your code"
                                                    className="p-2 text-sm w-full border"
                                                />
                                            </div>
                                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                                                Apply
                                            </button>
                                            <div className="border-t mt-8">
                                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                                    <span>Total cost</span>
                                                    <span>$600</span>
                                                </div>
                                                <button onClick={() => { setCheckout(true) }} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                                    Checkout
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
