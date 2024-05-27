import './css/bootstrap.min.css'
import './css/style.css'
import './lib/animate/animate.min.css'
import './lib/owlcarousel/assets/owl.carousel.min.css'

// <!-- JS Public -->
// <!-- JavaScript Libraries -->
import 'https://code.jquery.com/jquery-3.4.1.min.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js'
// import './lib/wow/wow.js'
import './lib/easing/easing.min.js'
import './lib/waypoints/waypoints.min.js'
import './lib/counterup/counterup.min.js'
import './lib/owlcarousel/owl.carousel.min.js'

// <!-- Template Javascript -->
// import './js/main.js'

import gambar from './img/carousel-1.jpg'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Bar from '../../components/Bar'

function PublicUser() {
    // Name Bar Start
    ReactDOM.createRoot(document.getElementById('bar')).render(
        <React.StrictMode>
            <Bar nameBar={'Moring Alagosay | AlagosayApp'} />
        </React.StrictMode>
    )
    // Name Bar End

    return (
        <>
            {/* <!-- Spinner Start --> */}
            {/* <div id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div> */}
            {/* <!-- Spinner End --> */}


            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0">Alagosay</h1>
                </a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarCollapse">
                    <div className=" d-none d-lg-flex">
                        <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                            <i className="fa fa-phone text-primary"></i>
                        </div>
                        <div className="ps-3">
                            <small className="text-primary mb-0">Hubungi Kami</small>
                            <p className="text-light fs-5 mb-0">+62 838 9605 9029</p>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}


            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={gambar} alt="" />
                        <div className="owl-carousel-inner">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-lg-8">
                                        <p className="text-primary text-uppercase fw-bold mb-2">// Moring Kekinian</p>
                                        <h1 className="display-1 text-light mb-4 animated slideInDown">Buat Santaimu Lebih Asik</h1>
                                        <p className="text-light fs-5 mb-4 pb-3">
                                            Moring ini hadir sebagai cemilan yang menemanimu dikala lagi santai
                                        </p>
                                        <a href="https://wa.me/+6283896059029?text=Halo%20Tim%20Alagosay,%0D%0A%0D%0ASaya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih.%0D%0A%0D%0ASalam,%0D%0ANama%20Anda"
                                            className="btn btn-primary rounded-pill py-3 px-5">Pesan Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                        <div className="owl-carousel-inner">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-lg-8">
                                        <p className="text-primary text-uppercase fw-bold mb-2">// Camilan di segala kondisi</p>
                                        <h1 className="display-1 text-light mb-4 animated slideInDown">Jadikan momen istimewa Anda
                                            lebih berkesan</h1>
                                        <p className="text-light fs-5 mb-4 pb-3">
                                            Dapatkan sensasi baru dengan Alagosay, camilan favorit para remaja, wanita, dan ibu
                                            rumah tangga
                                        </p>
                                        <a href="https://wa.me/+6283896059029?text=Halo%20Tim%20Alagosay,%0D%0A%0D%0ASaya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih.%0D%0A%0D%0ASalam,%0D%0ANama%20Anda"
                                            className="btn btn-primary rounded-pill py-3 px-5">Pesan Sekarang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- Facts Start --> */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-4 d-flex justify-content-center">
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Hadir Sejak</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">10</h1>
                                <p className="mb-2">Tahun lalu</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Dinikmati Oleh</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">17500</h1>
                                <p className="mb-2">Orang</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Penjualan</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">9357</h1>
                                <p className="mb-2">Pcs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts End --> */}


            {/* <!-- About Start --> */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid rounded" src="img/about-1.jpg" alt="" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid rounded" src="img/about-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <p className="text-primary text-uppercase mb-2">// About Us</p>
                                <h1 className="display-6 mb-4">Alagosay hadir untuk memanjakan lidah Anda
                                    setiap saat.</h1>
                                <p>Alagosay, camilan yang membuat Anda ketagihan! Nikmati kelezatan renyah, gurih, dan pedas
                                    yang menggoda dari Alagosay.
                                    Cocok untuk dinikmati kapan saja, di mana saja, oleh remaja, wanita, dan ibu rumah tangga
                                    yang menghargai cita rasa yang
                                    istimewa. Segera coba dan rasakan kepuasan tak terlupakan!
                                </p>

                                <div className="row g-2 mb-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Kualitas Terjamin
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Telah Terverifikasi
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Online Order
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Sensasi Baru
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Kemasan Praktis
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Cocok di segala kondisi
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Tahan hingga 100 Hari
                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="">Pesan Sekarang</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Product Start --> */}
            <div className="container-xxl bg-light my-6 py-6 pt-0">
                <div className="container">
                    <div className="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-4">
                                <h1 className="display-4 text-light mb-0">Moring Terenak</h1>
                            </div>
                            <div className="col-lg-8 text-lg-end">
                                <div className="d-inline-flex align-items-center text-start">
                                    <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                                    <div className="ms-4">
                                        <p className="fs-5 fw-bold mb-0">Call Us</p>
                                        <p className="fs-1 fw-bold mb-0">+62 838 9605 9029</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <p className="text-primary text-uppercase mb-2">// Varian Rasa</p>
                        <h1 className="display-6 mb-4">Cobalah sekarang dan nikmati sensasi baru yang menggugah selera Anda</h1>
                    </div>
                    <div className="row g-4 d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div className="text-center p-4">
                                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">Rp. 15.000</div>
                                    <h3 className="mb-3">Original</h3>
                                    <span>mempersembahkan kegurihan rasa yang khas dari Alagosay</span>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="img/product-1.jpg" alt="" />
                                    <div className="product-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i
                                            className="fa fa-eye text-primary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div className="text-center p-4">
                                    <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">Rp. 15.000
                                    </div>
                                    <h3 className="mb-3">Pedas</h3>
                                    <span>Hadir untuk menggugah selera Anda dengan kepedasan yang pas</span>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="img/product-2.jpg" alt="" />
                                    <div className="product-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i
                                            className="fa fa-eye text-primary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Product End --> */}

            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl my-6 py-6 pb-0">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <p className="text-primary text-uppercase mb-2">// Review Pelanggan</p>
                        <h1 className="display-6 mb-4">Telat di Review Positif oleh lebih dari 1000 orang</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-1.jpg" alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                                Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-2.jpg" alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                                Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-3.jpg" alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                                Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item bg-white rounded p-4">
                            <div className="d-flex align-items-center mb-4">
                                <img className="flex-shrink-0 rounded-circle border p-1" src="img/testimonial-4.jpg" alt="" />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                                Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>


                    {/* <!-- kontak --> */}
                    <div className="bg-light text-dark rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-4 mb-3 text-center">Hubungi Kami</h1>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <a
                                    href="mailto:kumahaathnya@gmail.com?subject=Pesan%20Anda%20di%20Alagosay&body=Hallo%20Tim%20Alagosay,%0D%0A%0D%0ASaya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih.%0D%0A%0D%0ASalam,%0D%0ANama%20Anda">
                                    <div className="card bg-primary text-light text-center p-2">
                                        <h3 className="text-light">Email</h3>
                                        <div className="d-flex justify-content-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                                className="bi bi-envelope-at" viewBox="0 0 16 16">
                                                <path
                                                    d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                                                <path
                                                    d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                            </svg>
                                        </div>
                                        <p>kumahaathnya@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <a
                                    href="https://wa.me/+6283896059029?text=Halo%20Tim%20Alagosay,%0D%0A%0D%0ASaya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih.%0D%0A%0D%0ASalam,%0D%0ANama%20Anda">
                                    <div className="card bg-primary text-light text-center p-2">
                                        <h3 className="text-light">WhatsApp</h3>
                                        <div className="d-flex justify-content-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                                className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path
                                                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                        </div>
                                        <p>+62 838 9605 9029</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- kontak end  --> */}
                </div>
            </div >
            {/* <!-- Testimonial End --> */}


            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Alamat Produksi</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Karangpawitan, Garut, Indonesia</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-light mb-4">Kontak</h4>
                            <p className="mb-2 "><i className="fa fa-phone-alt me-3"></i>+62 838 9605 9029</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>kumahaathnya@gmail.com</p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i
                                    className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i
                                    className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
                className="bi bi-arrow-up"></i></a>
        </>
    )
}

export default PublicUser
