const readline = require('readline');

const compareNumeric = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};

const majorityElement = (n, k) => {
  let currentIndex = 0;
  while (currentIndex <= (n - 1) / 2) {
    let count = 1;
    let lastIndex = currentIndex;
    while (currentIndex <= n - 1 && k[lastIndex] == k[currentIndex + 1]) {
      count += 1;
      currentIndex += 1;
    }
    if (count > n / 2) return 1;
    currentIndex += 1;
  }
  return 0;
};

// const majorityElement = (n, a) => {
//   for (let i = 0; i <= Math.floor((n - 1) / 2); i++) {
//     let count = 0;
//     for (let j = 0; j <= n - 1; j++) {
//       if (a[i] == a[j]) {
//         count += 1;
//       }
//     }
//     if (count > n / 2) return 1;
//   }
//   return 0;
// };

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let n = parseInt(first);
    rl.question('', (second) => {
      let k = second.split(' ');
      k.sort(compareNumeric);
      console.log(majorityElement(n, k));
      rl.close();
    });
  });
};

processLineByLine();
