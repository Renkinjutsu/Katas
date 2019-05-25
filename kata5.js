const urlEncode = function(text) {
  let url = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      url.push("%20");
    }
    else {
      url.push(text[i]);
    }
  }
  url = url.join('');
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));