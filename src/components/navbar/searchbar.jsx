"use client";
import { AppContext } from "@/context/appContext";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

export default function SearchBar() {
    const { searchProduct } = useContext(AppContext);
    const router = useRouter();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const Search = async (e) => {
        e.preventDefault();

        if (!value.trim()) {
            setError("Please enter a search term.");
            return;
        }

        setError(""); // Clear any existing error
        try {
            await searchProduct(value);
            router.push("/products");
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err.message);
        }
    };

    return (
        <div className="pb-2 md:pb-0 w-[90%] md:w-auto">
            <form onSubmit={Search}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search something..."
                    className="w-full xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all"
                />
                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
            </form>
        </div>
    );
}
