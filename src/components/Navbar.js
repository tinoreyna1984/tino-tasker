import React from 'react';
import { NavLink } from 'react-router-dom';
import "../scss/components/_navbar.scss"

export function Navbar() {
    return (
        <div className='nav-container'>
            <h1>Tino Tasker</h1>
            <nav>
                <NavLink className="doodle-a doodle-border" to={"/"}>All</NavLink>
                <NavLink className="doodle-a doodle-border" to={"/completed"}>Completed</NavLink>
                <NavLink className="doodle-a doodle-border" to={"/pending"}>Pending</NavLink>
                <NavLink className="doodle-a doodle-border" to={"/about"}>About</NavLink>
            </nav>
        </div>
    )
}
