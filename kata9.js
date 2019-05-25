let talkingCalendar = function(date) {
  let calender = [];
  date = date.split("/", 3);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  calender.push(month[Number((date[1]) -= 1)]);
  calender.push(Number(date[2]));
  if (calender[1] == 1) {
    calender[1] = '1st,';
  }
  else if (calender[1] == 2) {
    calender[1] = '2nd,';
  }
   else if (calender[1] == 3) {
    calender[1] = '3rd,';
  }
   else {
    calender[1] = calender[1] + 'th';
  }
  calender.push(Number(date[0]));
  calender = calender.join(' ')
  return calender;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("22BC/4/1"));