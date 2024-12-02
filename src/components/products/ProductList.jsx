"use client"
import React, { useContext } from 'react'
import ProductCard from '../card/productCard'
import { AppContext } from '@/context/appContext'

export default function ProductList() {
    const { products, loading } = useContext(AppContext);
    return (
        <div className="">
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
                {
                    loading ? (<div className="flex justify-center items-center py-16 w-full">
                        <div
                            className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                        >
                            <div
                                className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                            ></div>
                        </div>
                    </div>) :
                        products.length === 0 && (
                            <div className="">Not found try searching something else</div>
                        )

                }
                {
                    products.map(
                        (data, key) => {
                            return (
                                <ProductCard data={data} key={key} />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
