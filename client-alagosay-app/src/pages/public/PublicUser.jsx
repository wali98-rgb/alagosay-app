import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css'; // Ensure you adjust the path to your CSS file
import 'animate.css';
import './scss/bootstrap.scss';
import WOW from 'wow.js'
import AOS from 'aos';
import 'aos/dist/aos.css'
import $ from 'jquery';
// gambar
import GC_1 from './img/carousel-1.jpg'
import GC_2 from './img/carousel-2.jpg'
import Ab1 from './img/about-1.jpg'
import Ab2 from './img/about-2.jpg'
import GP1 from './img/product-1.jpg'
import GP2 from './img/product-2.jpg'

const App = () => {
    useEffect(() => {
        // Spinner
        const spinner = () => {
            setTimeout(() => {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();

        // Initiate the wowjs
        new WOW().init();
        AOS.init();

        // Fixed Navbar
        const topBarHeight = $('.top-bar').height();
        $('.fixed-top').css('top', topBarHeight);
        $(window).scroll(() => {
            if ($(window).scrollTop()) {
                $('.fixed-top').addClass('bg-dark').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-dark').css('top', topBarHeight);
            }
        });

        // Back to top button
        $(window).scroll(() => {
            if ($(window).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(() => {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });

    }, []);
    return (
        <>
            {/* Spinner Start */}
            <div id="spinner"
                className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div>
            {/* Spinner End */}

            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0 text-shadow">Alagosay</h1>
                </a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarCollapse">
                    <div className="d-none d-lg-flex">
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
            {/* Navbar End */}

            {/* Carousel Start */}
            <div className="container-fluid p-0 pb-5 wow fadeIn carousel slide" data-wow-delay="0.1s" id="carouselExampleCaptions">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-fluid img-c d-block w-100" src={GC_1} alt="" />
                        <div className="carousel-caption">
                            <p className="text-primary text-uppercase fw-bold mb-2">// Moring Kekinian</p>
                            <h1 className="display-1 text-light mb-4 animated slideInDown">Buat Santaimu Lebih Asik</h1>
                            <p className="text-light fs-5 mb-4 pb-3">
                                Moring ini hadir sebagai cemilan yang menemanimu dikala lagi santai
                            </p>
                            <a href="https://wa.me/+6283896059029?text=Halo%20Tim%20Alagosay,%0D%0A%0D%0ASaya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih.%0D%0A%0D%0ASalam,%0D%0ANama%20Anda"
                                className="btn btn-primary rounded-pill py-3 px-5">Pesan Sekarang</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid img-c d-block w-100" src={GC_2} alt="" />
                        <div className="carousel-caption">
                            <p className="text-primary text-uppercase fw-bold mb-2">// Camilan di segala kondisi</p>
                            <h1 className="display-1 text-light mb-4 animated slideInDown text-shadow">Jadikan momen istimewa Anda
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

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
            {/* Carousel End */}

            {/* Facts Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-4 d-flex justify-content-center">
                        <div className="col-lg-3 col-md-6 " data-aos="zoom-in-up">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Hadir Sejak</p>
                                <h1 className="display-5 mb-0">10</h1>
                                <p className="mb-2">Tahun lalu</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " data-aos="zoom-in-up">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Dinikmati Oleh</p>
                                <h1 className="display-5 mb-0 counter">17500</h1>
                                <p className="mb-2">Orang</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 " data-aos="zoom-in-up">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Penjualan</p>
                                <h1 className="display-5 mb-0 counter">9357</h1>
                                <p className="mb-2">Pcs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}

            {/* About Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row img-twice position-relative h-100">
                                <div className="col-6" data-aos="fade-right">
                                    <img className="img-fluid rounded" src={Ab1} alt="" />
                                </div>
                                <div className="col-6 align-self-end" data-aos="fade-left">
                                    <img className="img-fluid rounded" src={Ab2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="flip-left">
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
                                        <i className="fa fa-check text-primary me-2"></i>Banyak Varian
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>Harga Terjangkau
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4 pb-2">
                                    <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                                        <i className="fa fa-phone text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-primary mb-0">Hubungi Kami</p>
                                        <h5 className="mb-0">+62 838 9605 9029</h5>
                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="https://wa.me/+6283896059029?text=Halo%20Tim%20Alagosay,%0D%0A%0D%0ASaya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih.%0D%0A%0D%0ASalam,%0D%0ANama%20Anda">Pesan Sekarang</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Product Start */}
            <div className="container-xxl bg-light my-6 py-6 pt-0">
                <div className="container">
                    <div className="bg-primary text-light rounded-bottom p-5 my-6 mt-0" data-aos="flip-up">
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
                    <div className="text-center mx-auto mb-5" data-aos="fade-right" style={{ maxWidth: '500px' }}>
                        <p className="text-primary text-uppercase mb-2">// Varian Rasa</p>
                        <h1 className="display-6 mb-4">Cobalah sekarang dan nikmati sensasi baru yang menggugah selera Anda</h1>
                    </div>
                    <div className="row g-4 d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up">
                            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div className="text-center p-4">
                                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">Rp. 15.000</div>
                                    <h3 className="mb-3">Original</h3>
                                    <span>mempersembahkan kegurihan rasa yang khas dari Alagosay</span>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src={GP1} alt="" />
                                    <div className="product-overlay">
                                        <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i
                                            className="fa fa-eye text-primary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up">
                            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                                <div className="text-center p-4">
                                    <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">Rp. 15.000</div>
                                    <h3 className="mb-3">Pedas</h3>
                                    <span>Hadir untuk menggugah selera Anda dengan kepedasan yang pas</span>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src={GP2} alt="" />
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
            {/* Product End */}

            {/* Testimonial Start */}
            <div className="container-xxl my-6 py-6 pb-0">
                <div className="container">
                    <div className="text-center mx-auto mb-5" data-aos="zoom-in" style={{ maxWidth: '500px' }}>
                        <p className="text-primary text-uppercase mb-2">// Review Pelanggan</p>
                        <h1 className="display-6 mb-4">Telah di Review Positif oleh lebih dari 1000 orang</h1>
                    </div>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {[
                                { src: "img/testimonial-1.jpg", text: "Testimonial 1" },
                                { src: "img/testimonial-2.jpg", text: "Testimonial 2" },
                                { src: "img/testimonial-3.jpg", text: "Testimonial 3" },
                                { src: "img/testimonial-4.jpg", text: "Testimonial 4" },
                            ].map((testimonial, index) => (
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                    <img src={testimonial.src} className="d-block w-100" /><span>{testimonial.text}</span>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                    {/* Contact */}
                    <div className="bg-light text-dark rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-4 mb-5 text-center" data-aos="zoom-out">Hubungi Kami</h1>
                        <div className="row align-items-center">
                            <div className="col-md-6" data-aos="zoom-out-right">
                                <a href="mailto:kumahaathnya@gmail.com?subject=Pesan%20Anda%20di%20Alagosay&body=Hallo%20Tim%20Alagosay,%0D%0A%0D%0ASaya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%0D%0A%0D%0ATerima%20kasih.%0D%0A%0D%0ASalam,%0D%0ANama%20Anda">
                                    <div className="card bg-primary text-light text-center p-2">
                                        <h3 className="text-light m-3">Email</h3>
                                        <div className="d-flex justify-content-center m-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.268-.36-.66-1.019-.66-.798 0-1.443.727-1.443 1.859 0 1.066.603 1.746 1.486 1.746.5 0 .913-.263 1.085-.622.143.364.471.622.98.622zm-1.186-1.707c-.42 0-.682-.405-.682-.97 0-.602.262-1.011.682-1.011.429 0 .698.409.698 1 0 .571-.266.981-.698.981z" />
                                            </svg>
                                        </div>
                                        <h3 className='m-3 text-light'>kumahaathnya@gmail.com</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 mt-3" data-aos="zoom-out-left">
                                <a href="https://api.whatsapp.com/send?phone=6283896059029&text=Hallo%20Tim%20Alagosay,%20Saya%20tertarik%20dengan%20produk%20dan%20ingin%20mengetahui%20lebih%20lanjut.%20Terima%20kasih." target="_blank" rel="noopener noreferrer">
                                    <div className="card bg-primary text-light text-center p-2">
                                        <h3 className="text-light m-3">Whatsapp</h3>
                                        <div className="d-flex justify-content-center m-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.865 7.865 0 0 0 8.034 0C3.692 0 .136 3.555.136 7.934c0 1.395.362 2.755 1.048 3.968L0 16l4.234-1.101a7.855 7.855 0 0 0 3.8.968h.004c4.348 0 7.904-3.555 7.904-7.934 0-2.113-.82-4.095-2.34-5.607zm-5.568 11.2a6.654 6.654 0 0 1-3.382-.917l-.242-.144-2.512.654.67-2.448-.157-.251A6.704 6.704 0 0 1 1.364 7.93c0-3.647 2.967-6.614 6.636-6.614a6.617 6.617 0 0 1 4.713 1.953 6.575 6.575 0 0 1 1.923 4.676c0 3.64-2.967 6.614-6.636 6.614zm3.677-4.879c-.205-.102-1.213-.598-1.402-.667-.188-.07-.326-.102-.465.102-.14.204-.535.667-.655.803-.12.14-.24.154-.445.05-.204-.102-.862-.317-1.64-.998-.606-.54-1.01-1.204-1.13-1.408-.12-.204-.013-.316.09-.418.091-.09.204-.239.306-.358a1.453 1.453 0 0 0 .204-.339c.07-.14.035-.251-.017-.353-.05-.102-.465-1.122-.637-1.534-.168-.408-.34-.353-.465-.353h-.398c-.14 0-.367.051-.56.252-.188.204-.737.718-.737 1.754 0 1.036.755 2.036.86 2.178.102.14 1.486 2.317 3.601 3.25.504.217.896.347 1.204.444.505.16.965.137 1.33.084.406-.06 1.213-.498 1.384-.978.17-.48.17-.891.12-.977-.05-.086-.188-.137-.392-.239z" />
                                            </svg>
                                        </div>
                                        <h3 className='m-3 text-light'>+62 838 9605 9029</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-5" data-aos="fade-up">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Alamat Produksi</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3"></i>Karangpawitan, Garut, Indonesia
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-light mb-4">Kontak</h4>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3"></i>+62 838 9605 9029
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3"></i>kumahaathnya@gmail.com
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6"></div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-0" href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
                <i className="bi bi-arrow-up"></i></a>

        </>
    );
};

export default App;
