$(document).ready(function() {
  // create object instance of my Firebase database
  var myDBReference = new Firebase('https://mayko-app.firebaseio.com/');

  // grab <li> Handlebars template & compile
  var sourceTemplate = $('#list-template').html();
  var template = Handlebars.compile(sourceTemplate);



  // CREATE + READ functionality
  $('#message-form').submit(function(event) {
    // prevents page refresh
    event.preventDefault();

    // grab user input
    var message = $('#message').val().trim();
    console.log(message);

    var messagesReference = myDBReference.child('messages');
    messagesReference.push({
      message: message
    });

    var omdbUrl = 'http://www.omdbapi.com/?s=';
    $.ajax({
      url: omdbUrl + message,
      type: 'GET',
      success: function(movieObject) {
        // log movie info to check
        console.log(movieObject);

        // handle exception for if the movie doesn't exist on omdb
        if ( movieObject.Search !== undefined) {

            // loop through the data which is an array of movies
            for(var i = 0; i < movieObject.Search.length; i++) {
              // define data object
              var context = {
                //image: "http://img.omdbapi.com/?i=" + movieObject.Search[i].imdbID + "&apikey=e46b1fbe", Old API key doesn't work anymore
                image: "http://img.omdbapi.com/?i=" + movieObject.Search[i].imdbID + "&apikey=7fe29f8b",
                title: movieObject.Search[i].Title,
                year: movieObject.Search[i].Year,
                type: movieObject.Search[i].Type
              }
              // print movie info to DOM
              var html = template(context);
              $('body').append(html);
            } // end of loop

        }
        else {
          alert("Sorry the movie doesn't exist in our database. Please try another.");
        }
        
      } // end of success function

      /* something's wrong w my erorr msg
      error: function(movieObject) {
        console.log(movieObject);
      }*/

    // clear Input field
    //$('#message') = '';

    }); // end of ajax call

  }); // end of CREATE + READ functionality


});