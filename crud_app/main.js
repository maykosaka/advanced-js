$(document).ready(function() {
  // create object instance of my Firebase database
  var myDBReference = new Firebase('https://mayko-app.firebaseio.com/');

  // grab <li> Handlebars template & compile
  var sourceTemplate = $('#list-template').html();
  var template = Handlebars.compile(sourceTemplate);



  // user Submits movie name, it searches OMDB, and returns movies that match
  $('#message-form').submit(function(event) {
    // prevents page refresh
    event.preventDefault();

    // grab user input
    var message = $('#message').val().trim();
    console.log(message);

    // AJAX call to get movie info from OMDB, dynamically append to DOM
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
                image: "http://img.omdbapi.com/?i=" + movieObject.Search[i].imdbID + "&apikey=7fe29f8b",
                title: movieObject.Search[i].Title,
                year: movieObject.Search[i].Year,
                type: movieObject.Search[i].Type
              }
              // send movie info to DOM
              var html = template(context);
              $('body').append(html);
            } // end of for loop


            // CREATE: when user Clicks movie image from the selection, write it's title to database
            $('.movie-image').click(function(event) {
              // prevents page refresh
              event.preventDefault();

              // var title = movieObject.Search[this].Title;    doesn't work
              // grab that movie title, which should be the next node in DOM
              var title = $(this).next().text();
              var image = movieObject.Search[this].Poster;
              var messagesReference = myDBReference.child('faves');
              messagesReference.push({
                image: image,
                title: title
                });

            })

        } // end of if statement

        else {
          alert("Sorry, " + message + " doesn't exist in our database. Please try another movie.");
        }
        
/*
// Firebase documentation:
function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}*/

      } // end of success function

      /* something's wrong w my ajax erorr msg
      error: function(movieObject) {
        console.log(movieObject);
      }*/

    }); // end of ajax call

  }); // end of Submit function

});