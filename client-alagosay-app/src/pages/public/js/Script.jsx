import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import WOW from 'wowjs';
import $ from 'jquery';

const MyComponent = () => {
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
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
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
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
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

    return null; // Komponen ini tidak merender JSX apa pun
};

const rootElement = document.getElementById('root');
ReactDOM.render(<MyComponent />, rootElement);
