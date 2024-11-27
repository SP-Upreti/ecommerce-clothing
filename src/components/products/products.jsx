import React from 'react'
import ProductCard from '../card/productCard'

export default function Products() {
    return (
        <div className="w-fit mx-auto  px-4 py-16 sm:px-6 lg:px-8">
            <div className="py-4 text-3xl font-semibold">
                <h2>Popular Items</h2>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                {
                    [...Array(15)].map(
                        (data, key) => {
                            return (
                                <ProductCard key={key} />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
