const readline = require('readline');

const maximunAmountOfGold = (first, second) => {
  let [weight, n] = first.split(' ');
  let w = second.split(' ');
  w.unshift(0);

  let ww = [0];
  for (let j = 1; j <= weight; j++) {
    ww.push(0);
  }

  let result = [ww];
  for (let i = 1; i <= n; i++) {
    result.push([0]);
  }

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= weight; i++) {
      if (+w[j] > i) {
        result[j][i] = result[j - 1][i];
      } else {
        result[j][i] = Math.max(
          +w[j] + result[j - 1][i - +w[j]],
          result[j - 1][i]
        );
      }
    }
  }
  return result[n][weight];
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    rl.question('', (second) => {
      console.log(maximunAmountOfGold(first, second));
      rl.close();
    });
  });
};

processLineByLine();
