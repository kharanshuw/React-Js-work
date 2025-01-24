import React from "react"
import { Link } from "react-router"


export function Navbar() {
    return (
        <div className="flex flex-row gap-3 mt-2 mb-2 border pt-2 pb-2 justify-center " >

            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/login">login</Link>
            <Link to="/user">user</Link>
        </div>
    )
}


