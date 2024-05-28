import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/partials/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebars">
            <aside className="side">
                <div className="side-logo">
                    <a href="#">{"Alagosay App".toUpperCase()}</a>
                </div>

                <div className="side-nav">
                    <ul>
                        <li>
                            <Link to={'/4dm1n/'}><i className="bi bi-house"></i>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={'/4dm1n/Konten'}><i className="bi bi-newspaper"></i>Konten</Link>
                        </li>

                        <li>
                            <Link to={'/4dm1n/product'}><i className="bi bi-journal-richtext"></i>Produk</Link>
                        </li>

                        <li>
                            <Link to={'/4dm1n/contact'}><i className="bi bi-telephone"></i>Kontak</Link>
                        </li>

                        <li>
                            <Link to={'/4dm1n/about'}><i className="bi bi-info-circle"></i>Tentang Kami</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
