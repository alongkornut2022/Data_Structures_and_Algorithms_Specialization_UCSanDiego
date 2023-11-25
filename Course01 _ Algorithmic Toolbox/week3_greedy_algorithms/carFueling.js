const readline = require('readline');

const minRefills = (d, m, n, stop) => {
  if (d < m) return 0;

  let numRefills = 0,
    currentRefill = 0;

  while (currentRefill <= n) {
    let lastRefill = currentRefill;
    while (
      currentRefill <= n &&
      +stop[currentRefill + 1] - +stop[lastRefill] <= m
    ) {
      currentRefill += 1;
    }

    if (currentRefill === lastRefill) return -1;
    if (currentRefill <= n) {
      numRefills += 1;
    }
  }
  return numRefills;
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let d = parseInt(first);
    rl.question('', (second) => {
      let m = parseInt(second);
      rl.question('', (third) => {
        let n = parseInt(third);
        rl.question('', (four) => {
          let stop = four.split(' ');
          stop.unshift(0);
          stop.push(d);
          console.log(minRefills(d, m, n, stop));
          rl.close();
        });
      });
    });
  });
};

processLineByLine();
