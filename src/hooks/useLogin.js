import { useState } from 'react'

export default function useLogin() {
    const [loading, setLoading] = useState(false)
    const loginUser = async (email, password) => {
        try {
            setLoading(true);
            const valid = Validation(email, password);
            if (!valid) return;
            const req = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            })
            const res = await req.json();
            if (!res.success) {
                console.log(res.message)
            }
        }
        catch (err) {
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }

    return { loading, loginUser }
}

const Validation = (email, password) => {
    if (!email || !password) {
        console.log("email and password cannot be empty")
        return;
    }
    return true;
}