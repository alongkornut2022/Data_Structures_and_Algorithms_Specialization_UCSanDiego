const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', function (n) {
  let fib = [];
  if (+n == 0) {
    console.log(0);
    return n;
  }
  fib.push(0);
  fib.push(1);
  for (let i = 2; i <= n; i++) {
    let sum = Math.floor((fib[i - 1] + fib[i - 2]) % 10);
    fib.push(sum);
  }

  let sumLastDigit = 0n;
  for (let item of fib) {
    sumLastDigit += BigInt(item);
  }
  console.log(String(sumLastDigit)[String(sumLastDigit).length - 1]);

  rl.close();
});
