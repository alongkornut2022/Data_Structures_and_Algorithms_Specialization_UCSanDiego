const readline = require('readline');

const siftDown = (idx, data, swaps) => {
  let leftChild = 2 * idx + 1;
  let rightChild = 2 * idx + 2;

  let minIndex = idx;

  if (leftChild <= data.length - 1 && data[leftChild] < data[minIndex]) {
    minIndex = leftChild;
  }

  if (rightChild <= data.length - 1 && data[rightChild] < data[minIndex]) {
    minIndex = rightChild;
  }

  if (idx != minIndex) {
    swaps.push(idx + ' ' + minIndex);
    [data[idx], data[minIndex]] = [data[minIndex], data[idx]];
    siftDown(minIndex, data, swaps);
  }
};

const makeHeap = (n, second) => {
  let arr = second.split(' ');
  let data = arr.map((el) => +el);

  let swaps = [];

  for (let idx = Math.floor((data.length - 1) / 2); idx >= 0; idx -= 1) {
    siftDown(idx, data, swaps);
  }

  console.log(swaps.length);

  for (let i = 0; i <= swaps.length - 1; i++) {
    console.log(swaps[i]);
  }
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let n = +first;
    rl.question('', (second) => {
      makeHeap(n, second);
      rl.close();
    });
  });
};

processLineByLine();
