let repeatNumbers = function(data) {
  let num = [];
  for (let i = 0; i < data.length; i++) {
    let nums = [];
    let first = data[i][0];
    let second = data[i][1];
    for (let e = 0; e < second; e++) {
      nums.push(first);
    }
    nums = nums.join('');
    num[i] = nums;
  }
  return num;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));