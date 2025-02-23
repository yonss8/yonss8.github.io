function init() {
    var myLatlng = new google.maps.LatLng(-7.920136, 110.549968);

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

    var houseLatlng = new google.maps.LatLng(-7.920136, 110.549968);
    var houseMarker = new google.maps.Marker({
        position: houseLatlng,
        map: map,
        icon: 'images/loc.png'
    });
}