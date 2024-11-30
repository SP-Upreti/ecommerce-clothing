"use client"
const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const setdata = setProducts(data);
    }
    useEffect(
        () => {
            fetchProduct();
        },
        []
    )

    console.log(products)

    return (
        <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
    )
}