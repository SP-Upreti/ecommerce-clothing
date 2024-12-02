"use client";
import React, { useState } from "react";

const colorData = [
    { id: 1, name: "White", hex: "#FFFFFF", isChecked: false },
    { id: 2, name: "Beige", hex: "#F5F5DC", isChecked: false },
    { id: 3, name: "Blue", hex: "#0000FF", isChecked: true },
    { id: 4, name: "Brown", hex: "#A52A2A", isChecked: false },
    { id: 5, name: "Green", hex: "#008000", isChecked: false },
    { id: 6, name: "Purple", hex: "#800080", isChecked: false },
];

const sizeData = [
    { id: 1, name: "Small", abbreviation: "S", isAvailable: true },
    { id: 2, name: "Medium", abbreviation: "M", isAvailable: true },
    { id: 3, name: "Large", abbreviation: "L", isAvailable: false },
    { id: 4, name: "Extra Large", abbreviation: "XL", isAvailable: true },
];

const brandData = [
    { id: 1, name: "Nike", isPopular: true },
    { id: 2, name: "Adidas", isPopular: true },
    { id: 3, name: "Puma", isPopular: false },
    { id: 4, name: "Reebok", isPopular: false },
];

export default function FiltreOption() {
    const [toggle, setToggle] = useState({ color: false, size: false, brand: false });

    const handleToggle = (section) => {
        setToggle((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="border-t border-gray-200 py-6 space-y-6">
            {/* Color Section */}
            <div>
                <h3 className="-mx-2 -my-3 flow-root">
                    <button
                        type="button"
                        className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-color"
                        aria-expanded={toggle.color}
                        onClick={() => handleToggle("color")}
                    >
                        <span className="font-medium text-gray-900">Color</span>
                        <span className="ml-6 flex items-center">
                            {toggle.color ? (
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                                </svg>
                            )}
                        </span>
                    </button>
                </h3>
                {toggle.color && (
                    <div className="pt-6" id="filter-section-color">
                        <div className="space-y-6">
                            {colorData.map((color) => (
                                <div key={color.id} className="flex items-center">
                                    <input
                                        id={`color-${color.id}`}
                                        type="checkbox"
                                        value={color.name.toLowerCase()}
                                        defaultChecked={color.isChecked}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`color-${color.id}`} className="ml-3 text-gray-500">
                                        {color.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Size Section */}
            <div>
                <h3 className="-mx-2 -my-3 flow-root">
                    <button
                        type="button"
                        className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-size"
                        aria-expanded={toggle.size}
                        onClick={() => handleToggle("size")}
                    >
                        <span className="font-medium text-gray-900">Size</span>
                        <span className="ml-6 flex items-center">
                            {toggle.size ? (
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                                </svg>
                            )}
                        </span>
                    </button>
                </h3>
                {toggle.size && (
                    <div className="pt-6" id="filter-section-size">
                        <div className="space-y-6">
                            {sizeData.map((size) => (
                                <div key={size.id} className="flex items-center">
                                    <input
                                        id={`size-${size.id}`}
                                        type="checkbox"
                                        value={size.abbreviation.toLowerCase()}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                        disabled={!size.isAvailable}
                                    />
                                    <label htmlFor={`size-${size.id}`} className="ml-3 text-gray-500">
                                        {size.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Brand Section */}
            <div>
                <h3 className="-mx-2 -my-3 flow-root">
                    <button
                        type="button"
                        className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-brand"
                        aria-expanded={toggle.brand}
                        onClick={() => handleToggle("brand")}
                    >
                        <span className="font-medium text-gray-900">Brand</span>
                        <span className="ml-6 flex items-center">
                            {toggle.brand ? (
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                                </svg>
                            )}
                        </span>
                    </button>
                </h3>
                {toggle.brand && (
                    <div className="pt-6" id="filter-section-brand">
                        <div className="space-y-6">
                            {brandData.map((brand) => (
                                <div key={brand.id} className="flex items-center">
                                    <input
                                        id={`brand-${brand.id}`}
                                        type="checkbox"
                                        value={brand.name.toLowerCase()}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`brand-${brand.id}`} className="ml-3 text-gray-500">
                                        {brand.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
