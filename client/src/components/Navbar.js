import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation =()=>{
    return(
    <div >
        {/* <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to = "/planets">Planets</NavLink>
                        
                    </div>
                </div>
            </nav>
        </div> */}

        <div className ="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to = "/dashboard">Dashboard</NavLink>
                    <NavLink to = "/characters">Characters</NavLink>
                    <NavLink to = "/planets">Planets</NavLink>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default Navigation