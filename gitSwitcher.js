/* Bonus HW: create JS file called gitSwitcher.JS   provides an opinion for each day of the week.  
  defined var passes day to switch statement. */


/* to quickly autocorrect indentations, altho Alex says don't rely on this:
 SelectAll, keep hitting Unindent to move all text to left,
  then Reindent & it'll make best guess of correct indentations */


// redone on 5/13
var day = new Date();
switch(day.getDay()) {
  case (1): // Monday
    console.log('Ugh, Mondays.');
    break;
  case (2): //Tuesday
    console.log('This week will never end!');
    break;
  case (3): //Wednesday
      onsole.log('Hump day.');
    break;
  case (4): //Thursday
    console.log('Almost there.');
    break;
  case (5): //Friday
    console.log('TGIF.');
    break;
  case (6): //Saturday
    console.log('Bars, day #2.');
    break;
  case (0): // Sundays
    console.log('Ugh, hangovers.');
    break;
  default:
    console.log('Pls enter a day of the week, starting with a capital letter.');
 }


// done 5/10
var day = 'Monday';
switch(day) {
	case ('Monday'):
		console.log('Ugh, Mondays.');
		break;
	case ('Tuesday'):
		console.log('This week will never end!');
		break;
	case ('Wednesday'):
  	console.log('Hump day.');
  	break;
  case ('Thursday'):
		console.log('Almost there.');
    break;
  case ('Friday'):
  	console.log('TGIF.');
  	break;
	case ('Saturday'):
  	console.log('Bars, day #2.');
  	break;
	case ('Sunday'):
  	console.log('Ugh, hangovers.');
  	break;
	default:
  	console.log('Pls enter a day of the week, starting with a capital letter.');
 }

