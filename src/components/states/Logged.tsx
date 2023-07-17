import React, { useState } from 'react'

const Logged = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>  User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </>
    )
}

export default Logged