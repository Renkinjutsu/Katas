let sumLargestNumbers = function(data) {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < data.length; i++) {
    let a = data[i];
    if (a > largest) {
      largest = a;
    }
  }
  data.splice(data.indexOf(largest));
  for (let i = 0; i < data.length; i++) {
    let a = data[i];
    if (a > secondLargest) {
      secondLargest = a;
    }
  }
  return largest + secondLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));