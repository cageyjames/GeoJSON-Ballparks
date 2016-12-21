(function(){
  var xhr = function() {
    var xhr = new XMLHttpRequest();
    return function( method, url, callback ) {
      xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 ) {
          callback( xhr.responseText );
        }
      };
      xhr.open( method, url );
      xhr.send();
    };
  }();

  var map = new L.mapbox.Map('map-container', 'jcsanford.jon28ndj', {
    center: [0, 0],
    zoom: 2
  });

  var icon = L.icon({
    iconSize: [30, 70],
    popupAnchor: [0, -35],
    iconUrl: 'assets/img/marker.png'
  });


  var geojson_layer_options = {
    pointToLayer: function(feature, lat_lng) {
      return L.marker(lat_lng, {icon: icon});
    },
    onEachFeature: function (feature, layer) {
      var property_key,
        value,
        html = '<h3>' + feature.properties.Ballpark + '</h3>',
        ignores = ['Lat', 'Long', 'Ballpark'],
        infos = [];
      for (property_key in feature.properties) {
        value = feature.properties[property_key];
        if (value && ignores.indexOf(property_key) < 0) {
          infos.push('<strong>' + property_key + '</strong>:' + value);
        }
      }
      html += infos.join('<br>');
      layer.bindPopup(html);
    }
  };
  var geojson_layer = new L.GeoJSON(null, geojson_layer_options);
  geojson_layer.addTo(map);

  function callback(data) {
    var geojson = JSON.parse(data);
    geojson_layer.addData(geojson);
  }

  xhr('get', 'ballparks.geojson', callback);
}());
