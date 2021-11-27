// navbar scripts
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.nav-bar').addClass("scrolled");
        } else {
            $('.nav-bar').removeClass("scrolled");
        }
    });

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