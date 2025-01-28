function init() {
    var myLatlng = new google.maps.LatLng(-7.920075, 110.549967);

    var mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // Gambar lokasi rumah langsung
    var houseLatlng = new google.maps.LatLng(-7.920075, 110.549967);
    var houseMarker = new google.maps.Marker({
        position: houseLatlng,
        map: map,
        icon: 'images/loc.png'  // Pastikan path gambar benar
    });
}