"use client"
import Link from 'next/link'
import { AppContext } from '@/context/appContext'
import React, { useContext, useState } from 'react'

export default function CategoryList() {

    const { category, getProductsByCategory, clickedCategory, setClickedCategory } = useContext(AppContext);

    const handleClick = async (category) => {
        if (category) {
            await getProductsByCategory(category);
        }
    };

    return (
        <>
            {
                category?.slice(0, 10).map(
                    (data, idx) => {
                        return (
                            <Link
                                key={idx}
                                className={`hover:text-yellow-300 ${clickedCategory.toLocaleLowerCase() === data.toLocaleLowerCase() ? "text-yellow-300" : ""} capitalize text-white text-[15px] block`}
                                href="/products"
                                onClick={() => {
                                    setClickedCategory(data);
                                    handleClick(data); // Now calling handleClick here
                                }}
                            >
                                <li className='max-lg:border-b max-lg:py-3 px-3'>
                                    {data}
                                </li>
                            </Link>
                        )
                    }
                )
            }
        </>
    )
}
