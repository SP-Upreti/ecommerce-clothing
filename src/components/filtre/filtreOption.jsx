"use client";
import React, { useState } from "react";

export default function FiltreOption() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className="border-t border-gray-200  py-6">
            <h3 className="-mx-2 -my-3 flow-root">
                {/* Expand/collapse section button */}
                <button
                    type="button"
                    className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-0"
                    aria-expanded={toggle}
                    onClick={handleClick}
                >
                    <span className="font-medium text-gray-900">Color</span>
                    <span className="ml-6 flex items-center">
                        {toggle ? (

                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <title>plus</title>
                                <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </span>
                </button>
            </h3>
            {/* Filter section, show/hide based on section state */}
            {toggle && (
                <div className="pt-6" id="filter-section-mobile-0">
                    <div className="space-y-6">
                        {["White", "Beige", "Blue", "Brown", "Green", "Purple"].map(
                            (color, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        id={`filter-mobile-color-${index}`}
                                        name="color[]"
                                        value={color.toLowerCase()}
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        defaultChecked={color === "Blue"}
                                    />
                                    <label
                                        htmlFor={`filter-mobile-color-${index}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                        {color}
                                    </label>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
