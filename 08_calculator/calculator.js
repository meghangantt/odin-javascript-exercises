const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
	let theSum = 0;
  for (let i = 0; i < arr.length; i ++) {
    theSum += arr[i];
  }
  return theSum;
};

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i ++) {
    product *= arr[i];
  }
  return product;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	let product = 1;
  for (x; x > 0; x--) {
    product *= x;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
