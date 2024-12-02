"use client";

const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);

    const [productDetail, setProductDetail] = useState([])

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.error("Failed to fetch products:", err.message);
        } finally {
            setLoading(false);
        }
    };

    const searchProduct = async (item) => {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products/search?q=${item}`);
            const data = await res.json();
            setProducts(data.products);
            console.log(products)
        } catch (err) {
            console.error("Search failed:", err.message);
        } finally {
            setLoading(false);
        }
    };

    const prodDetail = async (id) => {
        try {
            setLoading(true);
            const req = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await req.json();
            setProductDetail(data);
            console.log("product detail", productDetail)
        } catch (err) {
            console.error("Search failed:", err.message);
        } finally {
            setLoading(false);
        }
    }
    const getCategories = async () => {
        try {
            setLoading(true);
            const req = await fetch('https://dummyjson.com/products/category-list');
            const data = await req.json();
            setCategory(data);
        }
        catch (err) {
            console.log(err.message)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct();
        getCategories();
    }, []); // Only runs once when the component mounts

    return (
        <AppContext.Provider value={{ products, loading, searchProduct, category, prodDetail, productDetail }}>
            {children}
        </AppContext.Provider>
    );
};
