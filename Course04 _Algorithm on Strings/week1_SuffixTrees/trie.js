const readline = require('readline');

const buildTrie = (input) => {
  let tree = [];
  let node = 0;

  for (let pattern of input) {
    let i = 0;
    // console.log(pattern);
    for (let letter of pattern) {
      //   console.log(letter);
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (n) => {
  let input = [];
  rl.on('line', (line) => {
    input.push(line);
    if (input.length == n) {
      let tree = buildTrie(input);
      for (let node in tree) {
        for (let key in tree[node]) {
          console.log(`${node}->${tree[node][key]}:${key}`);
        }
      }
    }
  });
});
