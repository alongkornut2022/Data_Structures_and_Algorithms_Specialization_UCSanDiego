const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', function (money) {
  let numCoins = 0;
  while (money > 0) {
    if (money >= 10) {
      money -= 10;
    } else if (money >= 5) {
      money -= 5;
    } else {
      money -= 1;
    }
    numCoins += 1;
  }
  console.log(numCoins);

  rl.close();
});

// const MultPoly = (a, b, n) => {
//   let product = [2 * n - 1];
//   for (let i = 0; i <= 2 * n - 2; i++) {
//     product[i] = 0;
//   }
//   for (let i = 0; i <= n - 1; i++) {
//     for (let j = 0; j <= n - 1; i++) {
//       product[i + j] = product[i + j] + a[i] * b[j];
//     }
//   }
//   return product;
// };
