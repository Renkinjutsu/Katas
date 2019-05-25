let numberOfVowels = function(data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let num =[];
  for (let i = 0; i < vowels.length; i++) {
    for (let e = 0; e < data.length; e++) {
      if (data[e] === vowels[i]) {
        num.push(vowels[i]);
      }
    }
  }
  return num.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));