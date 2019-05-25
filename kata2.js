const conditionalSum = function(values, condition) {
  let num = [];
  let sum = 0;
  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        num.push(values[i]);
      }
    }
  }

  if (condition === 'odd') {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        num.push(values[i]);
      }
    }
  }
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));