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

const computeCharClasses = (text, order) => {
  let classes = [];
  classes[order[0]] = 0;

  for (let i = 1; i < text.length; i++) {
    if (text[order[i]] != text[order[i - 1]]) {
      classes[order[i]] = classes[order[i - 1]] + 1;
    } else {
      classes[order[i]] = classes[order[i - 1]];
    }
  }

  return classes;
};

const sortDoubled = (text, L, order, classes) => {
  let count = [];
  let newOrder = [];
  for (let i = 0; i < text.length; i++) {
    count.push(0);
    newOrder.push(0);
  }

  for (let i = 0; i < text.length; i++) {
    count[classes[i]] += 1;
  }

  for (let j = 1; j < text.length; j++) {
    count[j] += count[j - 1];
  }

  for (let i = text.length - 1; i >= 0; i--) {
    let start = (order[i] - L + text.length) % text.length;
    let cl = classes[start];
    count[cl] -= 1;
    newOrder[count[cl]] = start;
  }

  return newOrder;
};

const updateClasses = (newOrder, classes, L) => {
  let newClass = [];
  for (let i = 0; i < newOrder.length; i++) {
    newClass.push('');
  }
  newClass[newOrder[0]] = 0;

  for (let i = 1; i <= newOrder.length; i++) {
    let cur = newOrder[i];
    let prev = newOrder[i - 1];
    let mid = (cur + L) % newOrder.length;
    let midPrev = (prev + L) % newOrder.length;

    if (classes[cur] != classes[prev] || classes[mid] != classes[midPrev]) {
      newClass[cur] = newClass[prev] + 1;
    } else {
      newClass[cur] = newClass[prev];
    }
  }

  return newClass;
};

const buildSuffixArray = (text) => {
  let textNum = [];
  for (let i = 0; i < text.length; i++) {
    textNum.push(text[i] + i);
  }
  textNum.sort(compareNumeric);
  let order = [];
  for (let char of textNum) {
    let str = +char.slice(1);
    order.push(str);
  }
  // console.log(order);

  let classes = computeCharClasses(text, order);
  let L = 1;
  // console.log(classes);

  while (L < text.length) {
    order = sortDoubled(text, L, order, classes);
    classes = updateClasses(order, classes, L);
    L = L * 2;
  }

  return order.join(' ');
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (text) => {
  console.log(buildSuffixArray(text));
});
