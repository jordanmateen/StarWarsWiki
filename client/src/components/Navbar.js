import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation =()=>{
    return(
    <div >
        <div className ="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to = "/dashboard">Dashboard</NavLink>
                    <NavLink to = "/characters">Characters</NavLink>
                    <NavLink to = "/planets">Planets</NavLink>
                    <NavLink to = "/vehicles">Vehicles</NavLink>

                </div>
            </nav>
        </div>
    </div>
    )
}

export default Navigation