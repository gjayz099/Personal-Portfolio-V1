AOS.init();

$(document).ready(function(){
    $typed = new Typed('.Typed', {
        strings: ["Web Developer!", "Csharp Developer!", "Game Developer!"],
        stringsElement: null,
            typeSpeed: 60,
            startDelay: 600,
            backSpeed: 20,
            backDelay: 500,
            loop: true,
            loopCount: Infinity,
            cursorChar: "|",
            attr: null,
            contentType: 'html',
        })
    $('.owl-carousel').owlCarousel({
        stagePadding: 200,
        loop:true,
        margin:10,
        items:1,
        lazyLoad: true,
        nav:true,
        navText: false,
        // autoplay: true,
        autoplayTimeout:5000,
        nav:true,
        responsive:{
            0:{
                items:1,
                stagePadding: 60
            },
            600:{
                items:1,
                stagePadding: 100
            },
            1000:{
                items:1,
                stagePadding: 200
            },
            1200:{
                items:1,
                stagePadding: 250
            },
            1400:{
                items:1,
                stagePadding: 300
            },
            1600:{
                items:1,
                stagePadding: 350
            },
            1800:{
                items:1,
                stagePadding: 400
            }
        }
    })

})

