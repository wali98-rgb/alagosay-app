import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/partials/Navbar.css'

const Navbar = () => {
    return (
        <nav className="n42r">
            <div className="n42r-fn4">
                <button type='button' id='hamburger'><i className="bi bi-list"></i></button>
                <h1>Admin Page Page</h1>
            </div>

            <div className="n42r-3xr">
                <Link to={'/'}><i className="bi bi-door-open"></i></Link>
            </div>
        </nav>
    )
}

export default Navbar
