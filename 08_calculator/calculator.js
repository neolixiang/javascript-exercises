const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (x) {
  if (x.length===0) {
    return 0;
  } else {
  return x.reduce((a, b) => a + b)
  }
};

const multiply = function (x) {
  return x.reduce((a, b) => a * b)
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  } else {
    let x = 1
    for (let i = 1; i <= a; i++) {
      x *= i
    }
    return x;
  }
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
