/* OMDB project

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
- implement templating via handlebars to dynamically have your response object 
populate your DOM.
*/

/*'use strict';
(function() {
  // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
})();
*/

var source = $('#entryTemplate').html(); // reference handlebars template in html file
var template = Handlebars.compile(source); //reference the code/template(Handlebars), pass the object to it, compile the source markup

// button event handler will pass this url to the XMLHttpRequest
document.getElementById('movieBtn').onclick = function() {
  makeRequest('http://www.omdbapi.com/?s=clockwork-orange'); 
}

function makeRequest(url) {
  var httpRequest = new XMLHttpRequest()

  httpRequest.onreadystatechange = function(){ // state of API call, an EventHandler
    if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) { // if api call OK & server OK
      var movieArray = JSON.parse(httpRequest.responseText) //parse the data so it can be used

      // loop through the data which is an array of movies
      for(var i = 0; i < movieArray.Search.length; i++){
        // define data object
        var context = {
            title: movieArray.Search[i].Title,
            year: movieArray.Search[i].Year,
            type: movieArray.Search[i].Type
        }

        var html = template(context) //pass data object to template
        $('body').append(html) //attach template to DOM
      }
    }
  }

  httpRequest.open('GET', url) // 1.initialize request
  httpRequest.send() // 2.send request

}