var theArray = ["papada", "virus", "limoneto" , "videogame", "tango"];
for (let index = 0; index < theArray.length; index++) {
    alert(theArray[index]);
}

for (let index = 0; index < theArray.length; index++) {
    alert(theArray[index].substring(0, 1).toUpperCase()
        + theArray[index].substring(1));
}

var sentence = "";
for (let index = 0; index < theArray.length; index++) {
    sentence += theArray[index];
}
alert(sentence);

var numberArray = [];
for (let index = 0; index < 10; index++) {
    numberArray.push(index);
    console.log("added " + index + " to array");
}
console.log(numberArray.length);