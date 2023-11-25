const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', function (input) {
  function pisano(m) {
    let prev = 0;
    let curr = 1;
    let res = 0;

    for (let i = 0; i < m * m; i++) {
      let temp = 0;
      temp = curr;
      curr = (prev + curr) % m;
      prev = temp;

      if (prev == 0 && curr == 1) res = i + 1;
    }
    return res;
  }

  const [n, m] = input.split(' ');

  rl.close();
});
