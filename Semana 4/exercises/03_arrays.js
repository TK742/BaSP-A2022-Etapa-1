var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[5]);
console.log(months[11]);

var unsortedMonths = [...months];
var sortedMonths = unsortedMonths.sort();
console.log(sortedMonths);

months.unshift("Jupiter");
months.push("Saturno");
console.log(months);

months.shift();
months.pop();
console.log(months);

var backwardsMonths = [...months];
console.log(backwardsMonths.reverse());

var allMonths = months.join('-');
console.log(allMonths);

var slicedMonths = months.slice(4, 11);
console.log(slicedMonths);