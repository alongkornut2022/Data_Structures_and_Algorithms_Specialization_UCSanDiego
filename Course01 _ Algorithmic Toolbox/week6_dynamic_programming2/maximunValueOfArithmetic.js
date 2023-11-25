const readline = require('readline');

const operator = (a, b, op) => {
  if (op == '+') return a + b;
  if (op == '-') return a - b;
  if (op == '*') return a * b;
};

const minAndMax = (i, j, op, maxVal, minVal) => {
  let tempMin = Infinity;
  let tempMax = -Infinity;

  for (let k = i; k <= j - 1; k++) {
    let a = operator(maxVal[i][k], maxVal[k + 1][j], op[k]);
    let b = operator(maxVal[i][k], minVal[k + 1][j], op[k]);
    let c = operator(minVal[i][k], maxVal[k + 1][j], op[k]);
    let d = operator(minVal[i][k], minVal[k + 1][j], op[k]);
    tempMin = Math.min(tempMin, a, b, c, d);
    tempMax = Math.max(tempMax, a, b, c, d);
  }
  return [tempMin, tempMax];
};

const maximunValueOfArithmetic = (first) => {
  let exp = first.split('');

  let d = [];
  for (let i = 0; i <= exp.length - 1; i += 2) {
    d.push(+exp[i]);
  }

  let op = [];
  for (let j = 1; j <= exp.length - 2; j += 2) {
    op.push(exp[j]);
  }

  let maxVal = [];
  let minVal = [];
  for (let i = 0; i <= d.length - 1; i++) {
    maxVal[i] = [];
    minVal[i] = [];
    for (let j = 0; j <= d.length - 1; j++) {
      if (i == j) {
        maxVal[i][j] = d[i];
        minVal[i][j] = d[i];
      } else {
        maxVal[i][j] = 0;
        minVal[i][j] = 0;
      }
    }
  }

  for (let s = 1; s <= maxVal.length; s++) {
    for (let i = 0; i <= maxVal.length - 1 - s; i++) {
      j = i + s;
      [minVal[i][j], maxVal[i][j]] = minAndMax(i, j, op, maxVal, minVal);
    }
  }
  return maxVal[0][maxVal.length - 1];
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    console.log(maximunValueOfArithmetic(first));
    rl.close();
  });
};

processLineByLine();
