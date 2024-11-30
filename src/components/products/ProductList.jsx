import React from 'react'
import ProductCard from '../card/productCard'

export default function ProductList() {
    return (
        <div className="">
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
                {
                    [...Array(10)].map(
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
