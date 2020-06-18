        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 5,
                center: {
                    lat: 53.381128,
                    lng: -1.470085
                }
            });


        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
            { lat: 53.379830, lng: -1.468137 },
            { lat: 53.379830, lng: -1.468137 },
            { lat: 53.379830, lng: -1.468137 }
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }

   
    