/* Bonus HW: create JS file called gitSwitcher.JS   provides an opinion for each day of the week.  
  defined var passes day to switch statement. */


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