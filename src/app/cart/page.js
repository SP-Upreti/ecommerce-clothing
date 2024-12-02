import Cart from '@/components/cart/cart'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

export default function page() {
    return (
        <div>
            <Navbar />
            <Cart />
            <Footer />
        </div>
    )
}
