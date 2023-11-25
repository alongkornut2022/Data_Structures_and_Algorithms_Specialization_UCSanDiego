const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', function (input) {
  function euclidGCD(a, b) {
    if (+b === 0) return a;
    let lemma = +a % +b;
    return euclidGCD(b, lemma);
  }

  const [first, second] = input.split(' ');
  console.log((first * second) / euclidGCD(first, second));

  rl.close();
});
