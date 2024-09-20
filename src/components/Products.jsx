import { Suspense, useState } from 'react';
import React from 'react';
import { products } from '../Data/Global';
// import Link from ""
import { Link } from 'react-router-dom';

const Card = React.lazy(() => import('./CardMd'));

export default function Product() {
    const [visibleProducts, setVisibleProducts] = useState(10); // Initially display 20 products

    const loadMore = () => {
        setVisibleProducts((prevVisible) => prevVisible + 10); // Load 10 more products each click
    };

    return (
        <section className="w-full md:w-[90%] mx-auto px-4" id='products'>
            <h2 className="text-xl sm:text-2xl font-bold pb-5 sm:py-5">Trending Products</h2>
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
                {
                    products.slice(0, visibleProducts).map(
                        (data, key) => {
                            return (
                                <Suspense
                                    key={key}
                                    fallback={
                                        /* Loading skeleton */
                                        <div
                                            className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4"
                                        >
                                            <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                                            <div className="flex flex-col gap-2">
                                                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                                                <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                                                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                                                <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                                            </div>
                                        </div>
                                    }
                                >
                                    <Link to={"/products/detail"}>
                                        <Card image={data.photo} name={data.name} prevprice={data.prevPrice} price={data.price} id={key} />
                                    </Link>
                                </Suspense>
                            );
                        }
                    )
                }
            </div>
            <div className="sm:text-center">
                {visibleProducts < products.length && (
                    <button
                        className='bg-[--primary] sm:text-lg px-4 py-1 rounded-md mt-6 sm:my-6 text-white'
                        onClick={loadMore}
                    >
                        Load more
                    </button>
                )}
            </div>
        </section>
    );
}
