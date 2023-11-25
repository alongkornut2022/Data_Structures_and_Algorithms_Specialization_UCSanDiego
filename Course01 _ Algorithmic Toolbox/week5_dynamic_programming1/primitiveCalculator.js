const readline = require('readline');

const primitiveCalcutor = (n) => {
  let operator = [1, 2, 3];
  let minNum = [0];
  for (let m = 1; m <= n; m++) {
    minNum[m] = Infinity;
    for (let i = 0; i <= operator.length - 1; i++) {
      if (m >= operator[i]) {
        let numOp;
        if (operator[i] == 1) {
          numOp = minNum[m - operator[i]] + 1;
        } else if (operator[i] == 2) {
          numOp = minNum[m / 2] + 1;
        } else {
          numOp = minNum[m / 3] + 1;
        }
        if (numOp < minNum[m]) {
          minNum[m] = numOp;
        }
      }
    }
  }
  console.log(minNum[n] - 1);

  let arrNumber = [n];
  while (n != 1) {
    if (n % 3 == 0 && minNum[n] - 1 == minNum[n / 3]) {
      n = n / 3;
    } else if (n % 2 == 0 && minNum[n] - 1 == minNum[n / 2]) {
      n = n / 2;
    } else {
      n = n - 1;
    }
    arrNumber.unshift(n);
  }
  console.log(arrNumber.join(' '));
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let n = parseInt(first);
    console.log(primitiveCalcutor(n));
    rl.close();
  });
};

processLineByLine();
