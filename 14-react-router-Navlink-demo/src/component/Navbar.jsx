import React from "react"
import { NavLink } from "react-router"


export function Navbar() {
    return (
        <div className="flex flex-row gap-3 mt-2 mb-2 border pt-2 pb-2 justify-center " >

            <NavLink className={({ isActive }) => (isActive ? "red" : "")} to="/">home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "red" : "")} to="/about">about</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "red" : "")} to="/login">login</NavLink>
        </div>
    )
}


