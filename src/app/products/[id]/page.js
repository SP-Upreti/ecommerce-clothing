import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/Navbar'
import Details from '@/components/products/details'
import React from 'react'

export default async function Page({ params }) {
    const { id } = await params // Await the params object before accessing its properties

    return (
        <>
            <Navbar />
            <Details id={id} />
            <Footer />
        </>
    )
}
