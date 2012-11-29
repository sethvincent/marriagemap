(function($) {

  var app = $.sammy('#page', function() {

    this.get('/', function(ctx) {
      // present the 'choose an option' modal
    });

    this.get('/#/license', function(ctx) {
      // map licenses
    });
    
    this.get('/#/ceremony', function(ctx) {
      ceremony();
    });

  });

  $(function() {
    app.run();
  });

})(jQuery);





function ceremony() {
  Tabletop.init({ 
    key: '0AuwSoq4skLXjdGdzQV9fdnBKeHB6blN2MVZKMS00WXc',
    callback: function(data, tabletop) { 
      console.log(data);
      
      var map = L.map('map', {
        scrollWheelZoom: false,
        center: [47.62931, -122.26307],
        zoom: 10
      })

      L.tileLayer('http://{s}.tile.cloudmade.com/5aabd2e38b214356942b011b42b77394/997/256/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
          maxZoom: 18,
      }).addTo(map);
      
      $.each(data, function(index, value) {
        console.log(value["test"]);
        L.marker([value["latitude"], value["longitude"]]).addTo(map)
        .bindPopup('<h6>' + value["name"] + '</h6>' + value["description"] + '<br>' + value["address"] + '<br><a href="' + value["website"] + '" target="_blank">Learn more about this location');
      });
      
      var pop = L.popup();

      /* function onMapClick(e) {
        pop.setLatLng(e.latlng)
           .setContent("You clicked the map at " + e.latlng.toString())
           .openOn(map);
      }

      map.on('click', onMapClick); */
      
    },
    simpleSheet: true 
  });
}