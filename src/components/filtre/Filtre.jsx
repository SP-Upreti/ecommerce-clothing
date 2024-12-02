
import React from 'react'
import FiltreOption from './filtreOption'
import Sort from './Sort'

export default function Filtre({ children }) {
    return (
        <div>
            <div className="bg">
                <div>
                    <div className="fixed inset-0 flex z-40 lg:hidden " role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

                        <div className="ml-auto relative    h-full   shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    {/* Heroicon name: outline/x */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Filters */}
                            <div className="mt-4 border-t sm:hidden border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                                    <li>
                                        <a href="#" className="block px-2 py-3"> Totes </a>
                                    </li>

                                    <li>
                                        <a href="#" className="block px-2 py-3"> Backpacks </a>
                                    </li>

                                    <li>
                                        <a href="#" className="block px-2 py-3"> Travel Bags </a>
                                    </li>

                                    <li>
                                        <a href="#" className="block px-2 py-3"> Hip Bags </a>
                                    </li>

                                    <li>
                                        <a href="#" className="block px-2 py-3"> Laptop Sleeves </a>
                                    </li>
                                </ul>

                                <FiltreOption />

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">
                                        {/* Expand/collapse section button */}
                                        <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                            <span className="font-medium text-gray-900"> Category </span>
                                            <span className="ml-6 flex items-center">
                                                {/*
                                                Expand icon, show/hide based on section open state.

                                                Heroicon name: solid/plus-sm
                  */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                                {/*
                                                Collapse icon, show/hide based on section open state.

                                                Heroicon name: solid/minus-sm
                  */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    {/* Filter section, show/hide based on section state. */}
                                    <div className="" id="filter-section-mobile-1">
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500"> New Arrivals </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500"> Sale </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500"> Travel </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500"> Organization </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500"> Accessories </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">
                                        {/* Expand/collapse section button */}
                                        <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                            <span className="font-medium text-gray-900"> Size </span>
                                            <span className="ml-6 flex items-center">
                                                {/*
                                                Expand icon, show/hide based on section open state.

                                                Heroicon name: solid/plus-sm
                  */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                                {/*
                                                Collapse icon, show/hide based on section open state.

                                                Heroicon name: solid/minus-sm
                  */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    {/* Filter section, show/hide based on section state. */}
                                    <div className="pt-6" id="filter-section-mobile-2">
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500"> 2L </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500"> 6L </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500"> 12L </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500"> 18L </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500"> 20L </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500"> 40L </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <main className=" mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative z-10 flex items-baseline justify-between py-5 pb-6 border-b border-gray-200">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>

                            <Sort />
                        </div>

                        <section aria-labelledby="products-heading" className="pt-6 pb-10">
                            <h2 id="products-heading" className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8 gap-y-10">
                                {/* Filters */}
                                <div className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                                        <li>
                                            <a href="#"> Totes </a>
                                        </li>

                                        <li>
                                            <a href="#"> Backpacks </a>
                                        </li>

                                        <li>
                                            <a href="#"> Travel Bags </a>
                                        </li>

                                        <li>
                                            <a href="#"> Hip Bags </a>
                                        </li>

                                        <li>
                                            <a href="#"> Laptop Sleeves </a>
                                        </li>
                                    </ul>

                                    <FiltreOption />
                                    <FiltreOption />
                                    <FiltreOption />
                                    {/*  */}
                                </div>

                                {/* Product grid */}
                                <div className="lg:col-span-5">
                                    {/* Replace with your content */}
                                    <div className=" border-l   h-96 lg:h-full overflow-auto px-4">
                                        {children}
                                    </div>
                                    {/* /End replace */}
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        </div>
    )
}
