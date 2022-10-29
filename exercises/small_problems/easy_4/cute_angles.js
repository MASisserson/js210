const DEGREE = '\xB0'
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function bufferZeros(num) {
  let numStr = String(num);
  return (numStr.length > 1) ? numStr : `0${numStr}`
}

function dms(deg) {
  let degrees = Math.floor(deg);
  let minutes = (deg % 1) * MINUTES_PER_DEGREE;
  let seconds = Math.round((minutes % 1) * SECONDS_PER_MINUTE);

  minutes = bufferZeros(Math.round(minutes));
  seconds = bufferZeros(seconds);

  return `${degrees}${DEGREE}${minutes}'${seconds}"`
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

