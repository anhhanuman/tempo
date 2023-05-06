export function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export function formatDate(whichDate) {
  const myDate = new Date();
  myDate.setHours(0, 0, 0, 0);

  return [
    myDate.getFullYear(),
    padTo2Digits(myDate.getMonth() + 1),
    padTo2Digits(myDate.getDate()),
  ].join('-');
}

//https://bobbyhadz.com/blog/javascript-get-date-without-time#:~:text=Use%20the%20setHours()%20method,according%20to%20the%20provided%20values.