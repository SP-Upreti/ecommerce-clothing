import { Suspense } from 'react'
import React from 'react'

const Card = React.lazy(() => import('./CardMd'))

export default function Product() {
    return (
        <section className="w-[80%] mx-auto ">
            <h2 className="text-2xl font-bold py-5">Available <span className="text-[--secondary]">Products</span></h2>
            <div className="flex gap-8 flex-wrap ">
                {
                    [...Array(12)].map(
                        (data, key) => {
                            return (
                                <Suspense
                                    key={key}
                                    fallback={
                                        /* From Uiverse.io by Deri-Kurniawan */
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
                                    <Card id={key} />
                                </Suspense>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}