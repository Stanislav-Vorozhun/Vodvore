// Slider header
$(document).ready(function() {


    $('.clients').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        responsive: [{
            breakpoint: 770,
            autoplay: false,
            settings: 'unslick'
        }]
    });







    /* Menu nav toggle */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault(),
            $(this).toggleClass("active"),
            $("#nav").toggleClass("active");
    });


    $(".nav-toggle").click(function(e) {
        $(this).toggleClass("header-nav--close");
        $(".header-nav").toggleClass("header-nav--opened");
    });

    $('[data-collapse]').on('click', function(e) {
        e.preventDefault();


        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass('active');

    })


});