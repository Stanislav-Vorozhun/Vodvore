// Slider header
$(document).ready(function() {

    $('.clients').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
    });



    // window.addEventListener("resize", function() {
    //     if (window.innerWidth <= 770) {
    //         $('.clients').slick('unslick');
    //         sliderIsLive = false;
    //     } else {
    //         if (sliderIsLive) {
    //             $('.clients').slick();
    //             sliderIsLive = true;
    //         }
    //     }
    // });



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