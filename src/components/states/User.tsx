import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}
const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: "John Doe",
            email: "John.doe@gmail.com"
        })
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>Username : {user?.name}</h1>
            <h1>Email : {user?.email}</h1>
        </div>
    )
}

export default User