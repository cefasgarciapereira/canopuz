
function search() {
  var location = document.getElementById("location").value.replace(" ","%20");
  var category = document.getElementById("category").value.replace(" ","%20");
  var custom_url = 'https://api.foursquare.com/v2/venues/search/?near='+location+'&query='+category+'&client_id=ALCBWJD2IZ40YSYPYNMZAAKUXGOYCKSZQVRGHWXUXVC0GAFR&client_secret=NYX4JFVQ4JO1FPR2G2SVQLJORNQOHJGIJ05MIRWPIVX3LN50&v=20190211';
  var request = new XMLHttpRequest();
  var places = [];
  request.open('GET',custom_url,false);
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      var venues = data.response.venues;
      venues.forEach(function(venue){
        places.push(venue.name);
        places.push('\n');
      });
    } else {
      console.log('error');
    }
  }
  request.send();
  document.getElementById("card-title").innerHTML = places[0]
  document.getElementById("card").style.display = "block";
}
