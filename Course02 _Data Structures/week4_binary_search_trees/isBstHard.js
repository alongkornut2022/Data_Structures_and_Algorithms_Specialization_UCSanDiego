const readline = require('readline');

class BinarySearchTree {
  Read(value) {
    this.n = value.shift();
    this.key = [];
    this.left = [];
    this.right = [];
    for (let i = 0; i < this.n[0]; i++) {
      let a, b, c;
      [a, b, c] = value[i];
      this.key[i] = +a;
      this.left[i] = +b;
      this.right[i] = +c;
    }
  }

  InOrder() {
    if (this.n[0] == 0) return true;

    let result = [];
    let s = [];
    let x = 0;

    while (x != -1 || s.length > 0) {
      while (x != -1) {
        s.push(x);
        x = this.left[x];
      }
      x = s.pop();
      result.push(this.key[x]);
      x = this.right[x];
    }

    for (let i = 1; i < result.length; i++) {
      if (result[i] < result[i - 1]) {
        return false;
      }
    }

    for (let x = 0; x < this.key.length; x++) {
      if (this.left[x] != -1) {
        if (this.key[x] == this.key[this.left[x]]) {
          return false;
        }
      }
    }
    return true;
  }
}

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let value = [];
  for await (let line of rl) {
    value.push(line.split(' '));
  }

  let tree = new BinarySearchTree();

  tree.Read(value);

  if (tree.InOrder() == true) {
    console.log('CORRECT');
  } else {
    console.log('INCORRECT');
  }
};

processLineByLine();
