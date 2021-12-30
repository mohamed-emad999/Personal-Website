// navbar scripts
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.nav-bar').addClass("scrolled");
        } else {
            $('.nav-bar').removeClass("scrolled");
        }

        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });


    // Navbar Script
    $('.menu-btn').click(function () {
        $('.nav-bar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });


    // animated text
    var typed = new Typed(".typing", {
        strings: ["Software Development", "English Writing", "Entrepreneurship"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Development", "English Writing", "Entrepreneurship"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Carousel Script
    $('.carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoplayTimeout: 2,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1200: {
                items: 3,
                nav: false
            }
        }
    });
});