var longString = "helloWorldOfWondersHowAreYouDoingMyDears?"
console.log(longString.toUpperCase());

var firstFiveCharacters = longString.substring(0, 5);
console.log(firstFiveCharacters);

var lastThreeCharacters = longString.substring(longString.length - 3);
console.log(lastThreeCharacters);

var firstLetterIsCapital = longString.substring(0, 1).toUpperCase() + longString.substring(1).toLowerCase();
console.log(firstLetterIsCapital);