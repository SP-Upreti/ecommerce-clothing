import React, { useState } from "react";

function App() {
    const [array, setArray] = useState([]); // Initialize an empty array

    const handleSubmit = (newObject) => {
        const newArray = [...array.map((prevValue) => prevValue), newObject];
        setArray(newArray);
    };
}