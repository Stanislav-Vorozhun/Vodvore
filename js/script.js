// Slider header

$(document).ready(function() {
    $('.clients').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true
    });

    $('[data-collapse]').on('click', function(e) {
        e.preventDefault();

        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass('active');

    })

});