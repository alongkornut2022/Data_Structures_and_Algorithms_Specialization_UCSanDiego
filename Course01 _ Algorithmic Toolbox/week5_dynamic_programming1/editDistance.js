const readline = require('readline');

const editDistance = (first, second) => {
  let a = first.split('');
  let b = second.split('');
  a.unshift(0);
  b.unshift(0);

  let bb = [0];
  for (let j = 1; j < b.length; j++) {
    bb.push(j);
  }

  let matrix = [bb];
  for (let i = 1; i <= a.length; i++) {
    matrix.push([i]);
  }

  for (let j = 1; j <= b.length - 1; j++) {
    for (let i = 1; i <= a.length - 1; i++) {
      let insertion = matrix[i][j - 1] + 1;
      let deletion = matrix[i - 1][j] + 1;
      let match = matrix[i - 1][j - 1];
      let misMatch = matrix[i - 1][j - 1] + 1;

      if (a[i] == b[j]) {
        matrix[i][j] = Math.min(insertion, deletion, match);
      } else {
        matrix[i][j] = Math.min(insertion, deletion, misMatch);
      }
    }
  }

  return matrix[a.length - 1][b.length - 1];
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    rl.question('', (second) => {
      console.log(editDistance(first, second));
      rl.close();
    });
  });
};

processLineByLine();
