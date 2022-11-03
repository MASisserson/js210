/*
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  const timeComponents = timeStr.split(':');
  const hours = parseInt(timeComponents[0], 10);
  const minutes = parseInt(timeComponents[1], 10);

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}
*/

const MINUTES_PER_MILLISECOND = 1 / 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = 'January 1, 2000'

function extractTimeParts(timeStr) {
  const time = timeStr.split(':');
  return { hr: time[0], min: time[1] };
}

function afterMidnight(timeStr) {
  const time = extractTimeParts(timeStr);
  const referenceDate = new Date('${DATE_PART} 00:00:00');
  const checkDate = new Date(`${DATE_PART} ${time.hr}:${time.min}:00`);
  return Math.floor((checkDate - referenceDate) * MINUTES_PER_MILLISECOND);
}

function beforeMidnight(timeStr) {
  if (timeStr === '00:00') {
    return 0;
  }

  const time = extractTimeParts(timeStr);
  const referenceDate = new Date('${DATE_PART} 00:00:00');
  const checkDate = new Date(`December 31, 1999 ${time.hr}:${time.min}:00`);
  return Math.floor((referenceDate - checkDate) * MINUTES_PER_MILLISECOND);
}
console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
