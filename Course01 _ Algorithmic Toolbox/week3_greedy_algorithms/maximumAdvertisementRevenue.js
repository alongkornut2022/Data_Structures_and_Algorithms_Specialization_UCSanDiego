const readline = require('readline');

const maxAdvertisementRevenue = (n, price, click) => {
  if (n == 1) return price[0] * click[0];
  n -= 1;
  let ni = n;

  for (let i = 1; i <= n; i++) {
    let index = 1;
    for (let j = 0; j <= ni; j++) {
      if (+click[j] > +click[index]) {
        index = j;
      }
    }
    [click[index], click[ni]] = [click[ni], click[index]];
    ni -= 1;
  }

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += +click[i] * +price[i];
  }
  return sum;
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let n = parseInt(first);
    rl.question('', (second) => {
      let price = second.split(' ');
      rl.question('', (thrid) => {
        let click = thrid.split(' ');
        console.log(maxAdvertisementRevenue(n, price, click));
        rl.close();
      });
    });
  });
};

processLineByLine();

// Failed case #13/41: Wrong answer

// (Time used: 0.03/5.00, memory used: 30814208/2147483648.)
