"use client"
import Link from 'next/link'
import { AppContext } from '@/context/appContext'
import React, { useContext } from 'react'

export default function CategoryList() {

    const { category } = useContext(AppContext)

    return (
        <>
            {
                category?.slice(0, 10).map(
                    (data, idx) => {
                        return (
                            <Link key={idx} className='hover:text-yellow-300 text-white text-[15px] font-medium block' href={"/products"}><li className='max-lg:border-b max-lg:py-3 px-3'> {data} </li></Link>
                        )
                    }
                )
            }
        </>
    )
}
