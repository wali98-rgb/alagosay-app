import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css';
import './css/style.css';
import 'animate.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'counterup';
import WOW from 'wowjs';
import $ from 'jquery';

function PublicUser() {
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

        // Inisiasi WOW.js
        new WOW.WOW().init();

        // Navbar Tetap
        const handleScroll = () => {
            if ($(window).scrollTop()) {
                $('.fixed-top').addClass('bg-dark').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
            }
        };

        $('.fixed-top').css('top', $('.top-bar').height());
        $(window).on('scroll', handleScroll);

        // Tombol kembali ke atas
        const handleBackToTop = () => {
            if ($(window).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        };

        $(window).on('scroll', handleBackToTop);
        $('.back-to-top').on('click', () => {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });

        // Carousel header
        $(".header-carousel").owlCarousel({
            autoplay: false,
            smartSpeed: 1500,
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                '<i className="bi bi-chevron-left"></i>',
                '<i className="bi bi-chevron-right"></i>'
            ]
        });

        // Penghitung fakta
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });

        // Carousel testimoni
        $(".testimonial-carousel").owlCarousel({
            autoplay: false,
            smartSpeed: 1000,
            margin: 25,
            loop: true,
            center: true,
            dots: false,
            nav: true,
            navText: [
                '<i className="bi bi-chevron-left"></i>',
                '<i className="bi bi-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            $(window).off('scroll', handleScroll);
            $(window).off('scroll', handleBackToTop);
        };
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
                    <h1 className="text-primary m-0">Alagosay</h1>
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
            <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="./img/carousel-1.jpg" alt="" />
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
            {/* Carousel End */}

            {/* Facts Start */}
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
                                <p className="mb-2">Pengguna Aktif</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">1.23</h1>
                                <p className="mb-2">Juta pengguna</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-check fa-4x text-primary mb-4"></i>
                                <p className="mb-2">Produk terjual</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">10.0</h1>
                                <p className="mb-2">Juta item</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PublicUser />);
