let rlSync = require('readline-sync');

let length = parseInt(rlSync.question('How long is the room in meters: '));
let width = parseInt(rlSync.question('How wide is the room in meters: '));

const CONVERSION_RATIO = 10.7639;

let sqrMeters = (length * width);
let sqrFeet = (sqrMeters * CONVERSION_RATIO);

console.log(`The area of the room is ${sqrMeters} square meters (${sqrFeet} square feet).`)
