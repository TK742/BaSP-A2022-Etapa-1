function add(a, b) {
    if (validate(a)){
        alert("The first parameter is not a number");
        return NaN;
    } else if (validate(b)){
        alert("The second parameter is not a number");
        return NaN;
    }

    a = roundToInt(a);
    b = roundToInt(b);

    return a + b;
}

function validate(a) {
    return typeof a !== 'number'
}

function validateInt(a) {
    return Number.isInteger(a);
}

function roundToInt(a){
    if (!validateInt(a)){
        alert("The parameter " + a + " is not an integer. Rounding number.");
    }
    return Math.round(a);
}

console.log(add(1, 2));
console.log(add(1, 3.80));
console.log(validateInt(2));