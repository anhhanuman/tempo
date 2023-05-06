import date from 'date-and-time';
const now = new Date();
const test = new Date();
date.format(now, 'YYYY-MM-DD HH:mm:ss');
date.format(test, 'ddd, MMM DD YYYY'); 
console.log(now)
console.log(test)
console.log(date)

console.log(date.format(new Date(), 'DD-[MM]-YYYY'))
console.log(date.format(new Date(), 'YYYY-MM-DD'))

console.log(new Date(8.64e15).toString())

//what i want is today

/*
- Monday
- Tue
- Wed
- Thurs
- Friday

*/

const workDays = {
      monday: 'Monday',
      tues: 'Tuesday'
}


const dayOfWeekDigit = new Date().getDay();
console.log(dayOfWeekDigit); // 👉️ 0

const dayOfWeekName = new Date().toLocaleString(
  'default', {weekday: 'long'}
);
console.log(dayOfWeekName); // 👉️ Sunda