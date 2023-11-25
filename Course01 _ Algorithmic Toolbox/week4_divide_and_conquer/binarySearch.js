const readline = require('readline');

const binarySearch = (n, k, m, q) => {
  let result = [];
  for (let i = 0; i <= m - 1; i++) {
    let left = 0;
    let right = n - 1;
    let elResult = -1;
    while (right >= left) {
      let middle = Math.floor((left + right) / 2);
      if (+k[middle] == +q[i]) {
        elResult = middle;
        right = 0;
        left = 1;
      } else if (+k[middle] < +q[i]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    result.push(elResult);
  }
  return result.join(' ');
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let n = parseInt(first);
    rl.question('', (second) => {
      let k = second.split(' ');
      rl.question('', (third) => {
        let m = parseInt(third);
        rl.question('', (four) => {
          let q = four.split(' ');
          console.log(binarySearch(n, k, m, q));
          rl.close();
        });
      });
    });
  });
};

processLineByLine();
