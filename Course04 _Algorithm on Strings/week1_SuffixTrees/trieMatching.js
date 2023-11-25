const readline = require('readline');

const buildTrie = (patterns) => {
  let tree = [];
  let node = 0;

  for (let pattern of patterns) {
    let i = 0;

    for (let letter of pattern) {
      if (tree[i]) {
        if (!(letter in tree[i])) {
          tree[i][letter] = node + 1;
          node += 1;
          i = node;
        } else {
          i = tree[i][letter];
        }
      } else {
        tree[i] = {};
        tree[i][letter] = node + 1;
        node += 1;
        i += 1;
      }
    }
  }
  return tree;
};

const trieMatching = (text, tree) => {
  //   console.log(text);
  //   console.log(tree);
  let idx = [];
  let i = 0;
  let j = 0;
  let root = tree[0];
  let v = root;

  let patternIdx = [];
  while (j < text.length) {
    while (i < text.length && text[i] in v) {
      if ('$' in tree[v[text[i]]]) {
        if (patternIdx.length > 0) {
          //   console.log(patternIdx);
          idx.push(patternIdx[0]);
        } else {
          idx.push(j);
        }
        break;
      } else {
        v = tree[v[text[i]]];
        patternIdx.push(i);
        i += 1;
      }
    }
    j += 1;
    i = j;
    v = root;
    patternIdx.splice(0, patternIdx.length);
  }
  if (idx.length > 0) {
    return idx.join(' ');
  } else {
    return '';
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (text) => {
  rl.question('', (n) => {
    let patterns = [];
    rl.on('line', (line) => {
      patterns.push(line + '$');
      if (patterns.length == n) {
        let tree = buildTrie(patterns);
        console.log(trieMatching(text, tree));
      }
    });
  });
});
