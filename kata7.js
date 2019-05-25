let camelCase = function(input) {
  let camel = [];
  let double = false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      camel.push(input.charAt(i + 1).toUpperCase())
      i++;
    }
    else {
      camel.push(input[i]);
    }
  }
  camel = camel.join('');
  return camel;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));