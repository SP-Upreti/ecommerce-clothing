"use client";
import React, { useState } from "react";

export default function Notice() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>
            <div className="max-w-2xl mx-auto">


                {/* Main modal */}
                {isModalVisible && (
                    <div
                        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
                        aria-hidden={!isModalVisible}
                    >
                        <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                            {/* Modal content */}
                            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                                        About This Project
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={toggleModal}
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>

                                {/* Modal body */}
                                <div className="p-6 space-y-6">
                                    <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                                        This project is created for educational and learning purposes.
                                        It showcases how to implement modals in a React application using
                                        Tailwind CSS and state management with React Hooks.
                                    </p>
                                    <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                                        The modal component is designed to help developers understand how
                                        to build reusable UI components that align with modern development
                                        practices.
                                    </p>

                                    <p className="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                                        Contact me to get the project source code
                                    </p>
                                </div>

                                {/* Modal footer */}
                                <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button
                                        type="button"
                                        onClick={toggleModal}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Got It
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
