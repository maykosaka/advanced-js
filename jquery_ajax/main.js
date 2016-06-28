/*
- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.
- Ping another endpoint
*/

$(function() {

	$('#theWeather').on('click', function(e) {
		e.preventDefault();
		var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
		var apiKey = '&APPID=3617761ad8daa1054f98eefbfd6bf53d';
		var unit = 'imperial'; // change default from kelvin to fahrenheit
		var cityName = $('#userCityName').val().trim();
		console.log(cityName);

	    $.ajax({
			url: weatherUrl + cityName + apiKey + '&units=' + unit,
			type: 'GET',
			success: function(cityObject) {
				// log url to check it
	    		console.log(weatherUrl + cityName + apiKey + '&units=' + unit);
				// log cityObject to inspect
				console.log(cityObject);
				// the weather description for 24hrs from now
				var descr = cityObject.list[8].weather[0].description;
				// the high temp for 24hrs from now
				var temp24 = Math.floor(cityObject.list[8].main.temp_max);

				// reference id
				var $source = $('#forecast-template').html();
				// compile the source markup
				var template = Handlebars.compile($source);
				// define data object
				var weatherData = {
					city: $('#userCityName').val(),
					weatherDescr: descr,
					highTemp: temp24
				};
				// pass data object to template
				var fullTemplate = template(weatherData);
				// attach template to DOM
				$('body').append(fullTemplate);

			},
			// error msg if can't connect to API
			error: function() {
				console.error('API error');
			}
		});
	});


});