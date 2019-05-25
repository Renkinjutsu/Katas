let calculateChange = function(total, cash) {
  let last = [];
  let change = cash - total;
  let coinName = ['Twenty dollars', 'Ten dollars', 'Five dollars', 'Two dollars', 'One dollar', 'Quarter', 'Dime', 'Nickel', 'Penny'];
  let coinValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  for (let i = 0; i < coinValue.length; i++) {
    if (change % coinValue[i] >= 0 && Math.floor(change / coinValue[i]) > 0) {
    last.push(coinName[i] + ': ' + `${Math.floor(change / coinValue[i])}`);
    change = change % coinValue[i];
    }
  }
  return last;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));