import axios from "axios";
import { StoreContext } from "./StoreContext"
import { useEffect, useState } from "react";

export const Store = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [detailsId, setDetailsId] = useState(1);
    const [productDetails, setProductDetails] = useState([])

    const url = 'https://fakestoreapi.com/products?limit=30'
    async function FetchData() {
        await fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    async function fetchDetail() {
        await fetch(`https://fakestoreapi.com/products/${detailsId}`)
            .then(res => res.json())
            .then(json => setProductDetails(json))
    }


    useEffect(
        () => {
            FetchData();
            fetchDetail()
        }, []);

    const DetailsIdUpdate = (value) => {
        setDetailsId(value);
    }

    return (
        < StoreContext.Provider value={{ products, DetailsIdUpdate, detailsId, productDetails }} >
            {children}
        </StoreContext.Provider >
    )
}