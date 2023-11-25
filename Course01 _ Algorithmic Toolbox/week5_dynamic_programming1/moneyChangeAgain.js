const readline = require('readline');

const moneyChangeAgain = (money, coins) => {
  let minNumCoins = [0];
  for (let m = 1; m <= money; m++) {
    minNumCoins[m] = Infinity;
    for (let i = 0; i <= coins.length - 1; i++) {
      if (m >= coins[i]) {
        let numCoins = minNumCoins[m - coins[i]] + 1;
        if (numCoins < minNumCoins[m]) {
          minNumCoins[m] = numCoins;
        }
      }
    }
  }
  return minNumCoins[money];
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let money = parseInt(first);
    console.log(moneyChangeAgain(money, [1, 3, 4]));
    rl.close();
  });
};

processLineByLine();
