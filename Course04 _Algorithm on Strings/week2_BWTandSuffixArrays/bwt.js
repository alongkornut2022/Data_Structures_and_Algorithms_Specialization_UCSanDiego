const readline = require('readline');

const compareNumeric = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};

const bwt = (text) => {
  let result = '';
  let bwtString = [];
  bwtString.push(text);

  for (let i = 1; i < text.length; i++) {
    let tempText = text.slice(i) + text.slice(0, i);
    bwtString.push(tempText);
  }

  bwtString.sort(compareNumeric);
  //   console.log(bwtString);

  for (let string of bwtString) {
    result += string[string.length - 1];
  }

  return result;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (text) => {
  console.log(bwt(text));
});
