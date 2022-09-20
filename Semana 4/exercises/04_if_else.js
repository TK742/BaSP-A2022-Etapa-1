var randomNumber = Math.random();
if (randomNumber >= 0.5) {
    console.log("Greater than 0.5");
}
else {
    console.log("Less than 0.5");
}

var age = randomNumber * 100;
console.log(age);

if (age < 2){
    console.log("Bebé");
} else if (age > 2 && age < 13) {
    console.log("Niño");
} else if (age > 13 && age < 20) {
    console.log("Adolescente");
} else if (age > 20 && age < 30) {
    console.log("Joven");
} else if (age > 30 && age < 60) {
    console.log("Adulto");
} else if (age > 60 && age < 75) {
    console.log("Adulto mayor");
} else {
    console.log("Anciano");
}