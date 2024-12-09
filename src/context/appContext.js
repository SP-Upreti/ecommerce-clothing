"use client";

const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [authenticated, setAuthenticated] = useState(false)
    const [allproducts, setAllproducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [productDetail, setProductDetail] = useState([]);
    const [clickedCategory, setClickedCategory] = useState("");
    const [cart, setCart] = useState([]); // State to track cart items

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setAllproducts(data.products);
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
        } catch (err) {
            console.error("Search failed:", err.message);
        } finally {
            setLoading(false);
        }
    };

    const prodDetail = async (id) => {
        try {
            setLoading(true);
            const req = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await req.json();
            setProductDetail(data);
        } catch (err) {
            console.error("Search failed:", err.message);
        } finally {
            setLoading(false);
        }
    };

    const getCategories = async () => {
        try {
            setLoading(true);
            const req = await fetch('https://dummyjson.com/products/category-list');
            const data = await req.json();
            setCategory(data);
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getProductsByCategory = async (category) => {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.error("Failed to fetch products by category:", err.message);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (userId, cartProducts) => {
        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/carts/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    products: cartProducts, // Example: [{ id: 144, quantity: 4 }]
                }),
            });
            const data = await res.json();
            setCart(data); // Optionally update the local state with cart details
            console.log("Cart updated:", data);
        } catch (err) {
            console.error("Failed to add to cart:", err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
        getCategories();
    }, []); // Only runs once when the component mounts

    return (
        <AppContext.Provider value={{
            products,
            allproducts,
            loading,
            category,
            prodDetail,
            productDetail,
            searchProduct,
            getProductsByCategory,
            clickedCategory,
            addToCart,
            cart,
            setClickedCategory
        }}>
            {children}
        </AppContext.Provider>
    );
};
