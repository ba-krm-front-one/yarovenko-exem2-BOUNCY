/**
 * Created by Alexey on 30.04.2017.
 */

 ;(function ($) {
 "use strict";
    $(function () {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        arrows:false,
        autoPlay: 6000
    });

        smoothScroll.init();

        })

 })(jQuery);



