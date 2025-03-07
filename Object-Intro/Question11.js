let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let num3 = Number(prompt("Enter Third Number"));

const max = (num1 > num2 ) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
console.log(max);



