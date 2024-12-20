// "use client"
import Filtre from '@/components/filtre/Filtre'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/Navbar'
import ProductList from '@/components/products/ProductList'
import Products from '@/components/products/products'
import React from 'react'

export default function page() {
    return (
        <div>
            <Navbar />
            <Filtre>
                <ProductList />
            </Filtre>
            <Footer />
        </div>
    )
}
