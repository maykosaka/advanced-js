/* Bonus HW: create JS file called gitSwitcher.JS   provides an opinion for each day of the week.  
  defined var passes day to switch statement. */

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
  		console.log('Pls enter a day of the week.');
 }