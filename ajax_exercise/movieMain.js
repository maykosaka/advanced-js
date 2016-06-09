/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/

/*'use strict';
(function() {
  // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
})();
*/

var source = $('#entryTemplate').html();
var template = Handlebars.compile(source);

// function for button to pass this url to the XMLHttpRequest
document.getElementById('movieBtn').onclick = function() {
  makeRequest('http://www.omdbapi.com/?s=inception');
  makeRequest('http://www.omdbapi.com/?s=clockwork-orange');
}



function makeRequest(url) {
  var httpRequest = new XMLHttpRequest()

  httpRequest.onreadystatechange = function(){ // state of API call, an EventHandler
    if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) { // if api call OK & server OK
      var movieArray = JSON.parse(httpRequest.responseText)
      
      for(var i = 0; i < movieArray.Search.length; i++){
        // define data object
        var context = {
            //image: 'http://img.omdbapi.com/?i=' + <e46b1fbe>
            title: movieArray.Search[i].Title,
            // voice 14. if issues can't tell where errors are, go into dev tools & check status
            year: movieArray.Search[i].Year,
            imdb: movieArray.Search[i].imbdID,
            type: movieArray.Search[i].Type
        }

/*OMBD movie poster
API Key: e46b1fbe 

Example: http://img.omdbapi.com/?i=tt2294629&apikey=e46b1fbe 

Parameters:
i = IMDb ID
h (optional) = Desired height of image.*/

        var html = template(context) // 
        $('body').append(html) // 
      }
    }
  }

  httpRequest.open('GET', url) // 1.initialize request
  httpRequest.send() // 2.send request

}