"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchBar from './searchbar'
import CategoryList from './categoryList'

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        // Only access localStorage on the client-side
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            setTotalItems((JSON.parse(storedItems)).length);
        }
    }, [totalItems]);
    return (
        <header className='shadow-md font-[sans-serif] tracking-wide relative z-50'>
            <section
                className='flex lg:items-center relative sm:py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[80px] max-lg:min-h-[60px]'>
                <Link className="hidden md:block max-sm:w-full max-sm:mb-3 shrink-0" href={"/"}>
                    <img
                        src="/logo.svg" alt="logo" className='w-[160px]' />
                </Link>

                <div className='flex flex-col-reverse sm:flex-row flex-wrap w-full items-center'>
                    <SearchBar />
                    <div className="ml-auto max-lg:mt-4">

                        <ul className='flex items-center'>
                            <Link href={'/customersupport'}>
                                <li className='max-sm:hidden flex text-[15px] max-lg:py-2 gap-2 px-3 font-medium text-[#333] cursor-pointer'>
                                    <svg width="20" height="20" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="si-glyph si-glyph-customer-support">

                                        <title>customer support</title>

                                        <defs>

                                        </defs>
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(1.000000, 0.000000)" fill="#434343">
                                                <g transform="translate(0.000000, 2.000000)">
                                                    <path d="M8.005,10.094 C6.563,10.094 5.098,9.238 4.243,8.105 C0.141,8.105 0.017,13.965 0.017,13.965 L15.992,13.965 C15.992,13.965 16.314,8.079 11.701,8.079 C10.847,9.226 9.447,10.094 8.005,10.094 Z" className="si-glyph-fill">

                                                    </path>
                                                    <path d="M11.441,3.069 C11.441,4.755 9.902,7.979 8.002,7.979 C6.105,7.979 4.565,4.754 4.565,3.069 C4.565,1.384 6.104,0.016 8.002,0.016 C9.902,0.017 11.441,1.385 11.441,3.069 L11.441,3.069 Z" className="si-glyph-fill">

                                                    </path>
                                                </g>
                                                <path d="M12.975,3.614 C12.975,3.298 12.535,3.043 11.989,3.041 L11.989,2.39 C11.989,2.293 12.026,0.022 8.014,0.022 C4.004,0.022 4.041,2.293 4.041,2.39 L4.041,3.064 C4.031,3.064 4.023,3.061 4.014,3.061 C3.471,3.061 3.034,3.312 3.034,3.623 L3.034,6.377 C3.034,6.686 3.472,6.938 4.014,6.938 C4.556,6.938 4.996,6.686 4.996,6.377 L4.996,3.623 C4.996,3.58 4.969,3.541 4.953,3.501 L4.953,2.75 C4.953,2.681 4.665,0.967 8.014,0.967 C11.364,0.967 11.016,2.681 11.016,2.75 L11.016,3.541 C11.01,3.566 10.991,3.588 10.991,3.614 L10.991,6.431 C10.991,6.748 11.434,7.005 11.983,7.005 C11.995,7.005 12.004,7.001 12.016,7.001 L12.016,8.03 L11.032,8.03 L11.032,9 L12.985,9 L12.975,3.614 L12.975,3.614 Z" className="si-glyph-fill">

                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                    Customer Support
                                </li>
                            </Link>
                            <li className='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="mr-2" viewBox="0 0 512 511">
                                    <path
                                        d="M497 193.3h-40.168c-1.215 0-2.418.052-3.613.13-9.024-8.051-19.004-14.7-29.68-19.82 24.348-17.294 40.262-45.712 40.262-77.778C463.8 43.266 421.035.5 368.469.5c-52.57 0-95.336 42.766-95.336 95.332 0 25.262 9.883 48.258 25.976 65.332h-70.148c16.094-17.074 25.973-40.07 25.973-65.332C254.934 43.266 212.168.5 159.602.5c-52.567 0-95.336 42.766-95.336 95.332 0 29.48 13.453 55.875 34.539 73.379-14.602 5.457-28.149 13.617-40.028 24.219a55.211 55.211 0 0 0-3.609-.13H15c-8.285 0-15 6.716-15 15v80.333c0 8.285 6.715 15 15 15h1.066v113.535c0 8.281 6.715 15 15 15h449.868c8.285 0 15-6.719 15-15V303.633H497c8.285 0 15-6.715 15-15V208.3c0-8.285-6.715-15-15-15zm-15 80.333h-25.168c-13.875 0-25.168-11.29-25.168-25.168 0-13.875 11.293-25.164 25.168-25.164H482zM303.133 95.832c0-36.023 29.308-65.332 65.332-65.332 36.023 0 65.336 29.309 65.336 65.332 0 36.027-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332zM159.602 30.5c36.023 0 65.332 29.309 65.332 65.332 0 36.023-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332 0-36.023 29.308-65.332 65.336-65.332zM30 223.3h25.168c13.875 0 25.168 11.29 25.168 25.169 0 13.875-11.293 25.164-25.168 25.164H30zm16.066 80.333h9.102c30.418 0 55.168-24.746 55.168-55.168 0-16.844-7.602-31.942-19.54-42.067h.356c15.504-9.918 33.535-15.23 52.383-15.23h142.887C258.664 214.566 241 249.574 241 288.633v113.535H110.332v-65.336c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H46.066zm419.868 98.531h-34.27v-65.332c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H271V288.633c0-53.742 43.723-97.465 97.469-97.465 18.933 0 37.039 5.36 52.582 15.36-11.852 10.128-19.383 25.163-19.383 41.94 0 30.419 24.746 55.165 55.168 55.165h9.098zm0 0"
                                        data-original="#000000" />
                                </svg>
                                Communty
                            </li>
                            <Link href={"/cart"} className='group'>
                                <li className='max-lg:py-2 px-3 cursor-pointer '>
                                    <span className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="inline" viewBox="0 0 512 512">
                                            <path
                                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                                data-original="#000000"></path>
                                        </svg>
                                        <span className='group-hover:animate-bounce '>
                                            <span
                                                className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white ring- ">{totalItems > 0 ? totalItems : ""}</span>
                                        </span>
                                    </span>
                                </li>
                            </Link>
                            <Link href={"/auth"}>
                                <li className='flex text-[15px] max-lg:py-2 px-3 hover:text-white group'>
                                    <button
                                        className='px-4 py-2 text-sm rounded font-semibold  border-2 border-[#333] group-hover:border-[--primary] bg-transparent group-hover: hover:bg-[--primary] '>Sign
                                        In
                                    </button>
                                </li>
                            </Link>
                            <li id="toggleOpen" className='lg:hidden'>
                                <button onClick={() => { setToggle(true) }}>
                                    <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div id="collapseMenu"
                className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                <button onClick={() => { setToggle(true) }} id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </button>

                <ul
                    className={`lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 bg-[#333] min-h-[46px] gap-4 max-lg:space-y-4 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}>
                    <CategoryList />
                </ul>
            </div>
            {
                toggle && (
                    <div className="fixed top-0 left-0 h-screen w-3/4 sm:w-1/2 bg-black transition-all duration-900">

                        <ul className='text-white p-4'>
                            <li className='flex justify-end '>
                                <span className='cursor-pointer' onClick={() => { setToggle(false) }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="34"
                                        height="34"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.225 6.225a.75.75 0 0 1 1.06 0L12 10.94l4.715-4.715a.75.75 0 1 1 1.06 1.06L13.06 12l4.715 4.715a.75.75 0 1 1-1.06 1.06L12 13.06l-4.715 4.715a.75.75 0 1 1-1.06-1.06L10.94 12 6.225 7.285a.75.75 0 0 1 0-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span></li>
                            <CategoryList />
                        </ul>
                    </div>
                )
            }
        </header>
    )
}
