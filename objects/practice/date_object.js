// 1.
// let today = Date();
// console.log(today);

// 2.
// console.log("Today's day is " + (new Date().getDay()));

// 3. 
// let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// console.log("Today's day is " + daysOfWeek[new Date().getDay()]);

// 4 and onward.
function dateWithSuffix(date) {
  if ([11, 12, 13].includes(date)) {
    return String(date) + 'th';
  } else if (String(date).endsWith('1')) {
    return String(date) + 'st';
  } else if (String(date).endsWith('2')) {
    return String(date) + 'nd';
  } else if (String(date).endsWith('3')) {
    return String(date) + 'rd';
  } else {
    return String(date) + 'th';
  }
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = months[date.getMonth()];
  let dayOfMonth = date.getDate();

  return `${month} ${dateWithSuffix(dayOfMonth)}`
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  return `${formattedDay(date)}, ${formattedMonth(date)}`;
}

// let date = new Date();
// let year = date.getFullYear();
// let timeSinceEpoch = date.getTime();

// console.log(`Today's date is ${formattedDate(date)} ${year}.`);
// console.log(`Milliseconds since Jan. 1st 1970: ${timeSinceEpoch}`);

let today = new Date();
let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);

console.log(`Today's date is ${formattedDate(today)}.`)
console.log(`Tomorrow's date is ${formattedDate(tomorrow)}.`);

let nextWeek = new Date(today.getTime());
console.log(nextWeek === today);
console.log(nextWeek.toDateString() === today.toDateString());

nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString());

function addRequiredPadding(num) {
  return (String(num).length < 2) ? String(num).padStart(2, '0') : String(num);
}

function formatTime(date) {
  let hour = addRequiredPadding(date.getHours());
  let minute = addRequiredPadding(date.getMinutes());


  return `${hour}:${minute}`;
}

console.log(`CURRENT TIME: ${formatTime(today)}`)
