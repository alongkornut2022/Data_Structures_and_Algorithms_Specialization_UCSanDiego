const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', function (input) {
  let [a, b] = String(input).split(' ');
  console.log(+a + +b);
  rl.close();
});