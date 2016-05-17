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



var monkeys = [
	{name: 'Tom', species: 'chimpanzee', foodsEaten: 'banana'},
	{name: 'Don', species: 'orangutan', foodsEaten: 'orange'},
	{name: 'Ron', species: 'gorilla', foodsEaten: 'apple'},
];

eatSomething(thingAsString);

var introduce = function() {
	for (i = 0; i < monkeys.length; i++) {
		console.log('Hello my name is ' + name[i] '. I am a ' + species[i] '. I just ate ' + foodsEaten[i] '.')
	}
}
introduce();





function declaration: need a name. The name below is ‘add'
function add(a,b) { a+b }

speak('arf arf') /