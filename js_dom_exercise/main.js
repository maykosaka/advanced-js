/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- Change the value of the element with the name id to be whatever the user inputs when page first loads.
- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#fav-list" list.
- Clear the input box when the user clicks the button.
- Bonus: only add item if the input box is not blank (hint: check innerHTML property)

*/


window.onload = function() {
  var your_name = prompt('What is your name?'),
      button = document.getElementById('new-thing-button'),
      delButton = document.getElementById('remove-thing-button'),
      clearbutton = document.getElementById('clear-button'),
      thing_list = document.getElementById('fav-list'), //ul
      items = thing_list.getElementsByTagName('li'); //li in array
      

  document.getElementById('name').innerHTML = your_name;

  button.onclick = function(event) {
  	event.preventDefault();
  	new_item = document.getElementById('new-thing').value;

  	if (new_item === '') { alert('Please enter a favorite thing'); }
  	else {
  	  console.log(thing_list);
  	  console.log(new_item);
  	  MyApp.add_to_list(thing_list, new_item);
	  document.getElementById('new-thing').value = '';
  	}
  }
  delButton.onclick = function(event) {
  	event.preventDefault();
  	if (items.length === 0) { alert('There are no items to delete.'); }
  	else {
  		MyApp.delete_from_list(thing_list, items);
  	}
  }
  clearbutton.onclick = function(event) {
    event.preventDefault();
    if (items.length === 0)  { alert('There are no items to clear.'); }
    else {
      MyApp.clear(thing_list);
    }
  }
};

var MyApp = {}

MyApp.add_to_list = function(thing_list, new_item) {
  var newLi = document.createElement('li');			// create new <li> node
  var textnode = document.createTextNode(new_item);	// new_item as text node
  newLi.appendChild(textnode);						// input new_item to <li>
  thing_list.appendChild(newLi); 					// append <li> to <ul>
}

MyApp.delete_from_list = function(thing_list, items) {
  console.log(items.length);
  thing_list.removeChild(items[items.length-1]); // remove last li
  console.log(thing_list.lastChild); // WHY repeats at item 3<
  /*thing_list.removeChild(thing_list.lastChild); why doesn't this work? */
  console.log(items.length);
}

MyApp.clear = function(thing_list) {
  thing_list.innerHTML = '';
}
