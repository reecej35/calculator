var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result1 = add(number1, number2);
alert(result1);

var subtract = function(number3, number4) {
  return number3 - number4;
};

var number3 = parseInt(prompt("Enter a number:"));
var number4 = parseInt(prompt("Enter another number"));
var result2 = subtract (number3, number4);
alert(result2);

var multiply = function(number5, number6) {
  return number5 * number6;
};

var number5 = parseInt(prompt("Enter a number:"));
var number6 = parseInt(prompt("Enter another number"));
var result3 = multiply (number5, number6);
alert(result3);

var divide = function(number7, number8) {
  return number7 / number8;
}

var number7 = parseInt(prompt("Enter a number:"));
var number8 = parseInt(prompt("Enter another number"));
var result4 = divide (number7, number8);
alert(result4);
