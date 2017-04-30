/**
 * Created by Alexey on 30.04.2017.
 */
function initMap() {
    var uluru = {lat: 48.7332085, lng: 37.5937418};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon:'favicon.png',
    });
}

 ;(function ($) {
 "use strict";
    $(function () {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        arrows:false,
        autoPlay: 1800
    });

        smoothScroll.init();

        })

 })(jQuery);



