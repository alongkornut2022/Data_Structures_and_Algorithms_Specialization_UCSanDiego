const readline = require('readline');

const stackWithMax = (first) => {};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    console.log(stackWithMax(first));
    rl.close();
  });
};

processLineByLine();
