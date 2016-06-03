/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Through jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to strikeout).

*/

var taskTracker = {};

taskTracker.addTask = function(list, task) {
  // create list item
  var $listItem = $('<li></li>');
  // further define li
  $listItem.html('<input type="checkbox" /><span>' + task.val() + '</span>');
  list.append($listItem);
  task.val('');
}

taskTracker.toggleCompleted = function(event) {
  // the element whose event listener triggered the event(the checkbox)
  var $checkbox = $(event.currentTarget);

  if (($checkbox).is(':checked')) {
    ($checkbox).next().addClass('strikeThru');
    taskTracker.moveToNewList(($checkbox).next());
  } else {
    ($checkbox).next().removeClass('strikeThru').addClass('noStrikeThru');
  }
}



$(function() {
  var $button = $('#new-thing-button');
  var $list = $('#fav-list');
  var $task = $('#new-thing');
  // add strikeThru & nostrikeThru class css to markup
  $("<style type='text/css'>.strikeThru{text-decoration:line-through} </style>").appendTo("head");
  $("<style type='text/css'>.nostrikeThru{text-decoration:none} </style>").appendTo("head");

  // add event listener/handler to button
  $button.on('click', function(event) {
    event.preventDefault();
    taskTracker.addTask($list, $task);
  });

  // add event listener/handler to checkboxes
  $list.on('click','input:checkbox',function(event) { // why doesn't prevent default work here?
    taskTracker.toggleCompleted(event); // pass event (click) to method
  });

});