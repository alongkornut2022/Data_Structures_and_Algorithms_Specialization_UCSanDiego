const readline = require('readline');

const compareNumeric = (a, b) => {
  if (a[0] == b[0]) {
    let aNum = +a.slice(1);
    let bNum = +b.slice(1);
    if (aNum > bNum) return 1;
    if (aNum < bNum) return -1;
  } else {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
};

const bwtInverse = (bwtText) => {
  let bwtTextList = [];
  let charFreq = {};

  for (let char of bwtText) {
    if (char in charFreq) {
      charFreq[char] += 1;
    } else {
      charFreq[char] = 1;
    }
    bwtTextList.push(char + charFreq[char]);
  }

  let bwtTextListLast = [...bwtTextList];
  let bwtTextListFirst = bwtTextList.sort(compareNumeric);

  // console.log(bwtTextListFirst);
  // console.log(bwtTextListLast);

  let bwtMap = {};
  for (let i = 0; i < bwtTextListFirst.length; i++) {
    bwtMap[bwtTextListFirst[i]] = bwtTextListLast[i];
  }

  // console.log(bwtMap);

  let newString = '';
  let mid = '$1';

  for (let i = 0; i < bwtTextListFirst.length - 1; i++) {
    newString = bwtMap[mid][0] + newString;
    mid = bwtMap[mid];
  }

  return newString + '$';
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (bwtText) => {
  console.log(bwtInverse(bwtText.trim()));
});
