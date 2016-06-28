/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: produce a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

var monkeysArray = [
	{name: 'Tom', species: 'chimpanzee', foodsEaten: 'banana'},
	{name: 'Don', species: 'orangutan', foodsEaten: 'orange'},
	{name: 'Ron', species: 'gorilla', foodsEaten: 'apple'},
];

var monkey = {
	eatSomething: function(thingAsString) {
	},
	introduce: function() {
		for (i = 0; i < monkeysArray.length; i++) {
		console.log('Hello my name is ' + monkeysArray[i].name + '. I am a ' + monkeysArray[i].species + '. I just ate ' + monkeysArray[i]['foodsEaten'] + '.');
		}
	},
}

introduce();
eatSomething();