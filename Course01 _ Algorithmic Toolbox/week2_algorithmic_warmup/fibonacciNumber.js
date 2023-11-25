const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', function (n) {
  let fib = [];
  fib.push(0);
  fib.push(1);
  for (let i = 2; i <= n; i++) {
    let sum = fib[i - 1] + fib[i - 2];
    fib.push(sum);
  }
  console.log(fib[n]);

  rl.close();
});
