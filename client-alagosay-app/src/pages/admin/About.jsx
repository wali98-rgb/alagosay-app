import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import 'bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/pages/Home.css'
import Logo from '../../assets/logo.png'

const About = () => {
    return (
        <MainLayout>
            <section className="c7Nt m-3">
                <div className="c7Nt7l">
                    <h2>About</h2>
                    <span>About / <Link to={'/4dm1n/About'}><i className="bi bi-info-circle"></i></Link></span>
                </div>

                <div className="p-3 card z-0">
                    <div className="row">
                        <div className="col-6">
                            <h3>Moring Alagosay</h3>
                            <h5><i className="bi bi-box-seam-fill text-primary fs-4 me-3"></i> Camilan Moring</h5>
                            <h5><i className="bi bi-box-seam-fill text-primary fs-4 me-3"></i> Camilan Moring</h5>

                        </div>
                        <div className="col-6">
                            <img src={Logo} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </MainLayout >
    )
}

export default About
