import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Bar from '../components/Bar'

import '../App.css'
import '../index.css'
import '../assets/css/partials/Sidebar.css'

const MainLayout = ({ children }) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com';
        link.rel = 'preconnect';
        document.head.appendChild(link);
    }, []);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.gstatic.com';
        link.rel = 'preconnect';
        document.head.appendChild(link);
    }, []);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    // Name Bar Start
    ReactDOM.createRoot(document.getElementById('bar')).render(
        <React.StrictMode>
            <Bar nameBar={'Admin Page | AlagosayApp'} />
        </React.StrictMode>
    )
    // Name Bar End

    return (
        < div className="body" >
            {/* Sidebar Start */}
            < Sidebar />
            {/* Sidebar End */}

            {/* Content Main App Start */}
            <div className="main">
                {/* Navbar Start */}
                <Navbar />
                {/* Navbar End */}

                {/* Content Admin Start */}
                {children}
                {/* Content Admin End */}
            </div>
            {/* Content Main App End */}
        </div >
    )
}

export default MainLayout
