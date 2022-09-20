var longString = "hello, World Of Wonders! How Are You Doing, My Dears?"
console.log(longString.toUpperCase());

var firstFiveCharacters = longString.substring(0, 5);
console.log(firstFiveCharacters);

var lastThreeCharacters = longString.substring(longString.length - 3);
console.log(lastThreeCharacters);

var firstLetterIsCapital = longString.substring(0, 1).toUpperCase() + longString.substring(1).toLowerCase();
console.log(firstLetterIsCapital);

console.log(longString.indexOf(' '));

var newLongString = "aperture science";
var firstLettersCapital = newLongString.substring(0, 1).toUpperCase() + newLongString.substring(1, newLongString.indexOf(' ')).toLowerCase()
    + newLongString.substring(newLongString.indexOf(' '), newLongString.indexOf(' ') + 2).toUpperCase() + newLongString.substring(newLongString.indexOf(' ') + 2).toLowerCase();
console.log(firstLettersCapital);