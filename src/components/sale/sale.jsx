import React from 'react'

export default function Sale() {
    return (
        <section className="p-4  h-96 bg-black">
            <div
                className="bg-gradient-to-br from-purple-500  to-blue-600 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
                <div className="flex flex-col gap-6">
                    <div className="">
                        <span className="text-gray-200">Black friday sale</span>
                        <br />
                        <span className=" text-4xl text-white font-semibold">20% off every Product</span>
                    </div>
                    <a href="" target="_blank" rel="noreferrer"
                        className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group">
                        <span>Buy now</span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4"
                        >
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                points="4,4 22,4 19,14 4,14 "
                            />
                            <circle
                                cx="4"
                                cy="22"
                                r="2"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                stroke="none"
                                fill="currentColor"
                            />
                            <circle
                                cx="20"
                                cy="22"
                                r="2"
                                strokeLinejoin="miter"
                                strokeLinecap="square"
                                stroke="none"
                                fill="currentColor"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                points="1,1 4,4 4,14 2,18 23,18 "
                            />
                        </svg>
                    </a>
                </div>
                <div className='animate-bounce'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-gray-100" viewBox="0 0 15 15">
                        <path fill="currentColor" fillRule="evenodd"
                            d="M4.5 0A2.5 2.5 0 0 0 2 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 0 0 0 5.5v1A1.5 1.5 0 0 0 1.5 8H7V4h1v4h5.5A1.5 1.5 0 0 0 15 6.5v-1A1.5 1.5 0 0 0 13.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0 0 10.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 0 0 4.5 0ZM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V4ZM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 0 1 4.5 1A2.5 2.5 0 0 1 7 3.5V4Z"
                            clip-rule="evenodd"></path>
                        <path fill="currentColor" d="M7 9H1v3.5A2.5 2.5 0 0 0 3.5 15H7V9Zm1 6h3.5a2.5 2.5 0 0 0 2.5-2.5V9H8v6Z">
                        </path>
                    </svg>
                </div>
            </div>
        </section>
    )
}
