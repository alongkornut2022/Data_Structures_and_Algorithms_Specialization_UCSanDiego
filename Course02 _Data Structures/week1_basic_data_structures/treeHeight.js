const readline = require('readline');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const treeHeight = (n, second) => {
  let parents = second.split(' ');

  let nodes = [];
  for (let i = 0; i <= n - 1; i++) {
    nodes.push([]);
  }

  let root;
  for (let chlidIndex = 0; chlidIndex <= n - 1; chlidIndex++) {
    let parentsIndex = parents[chlidIndex];
    if (parentsIndex == -1) {
      root = chlidIndex;
    } else {
      nodes[parentsIndex].push(parents[chlidIndex] + ',' + chlidIndex);
    }
  }

  let queue = new Queue();
  for (let j = 0; j < nodes[root].length; j++) {
    queue.enqueue(nodes[root][j]);
  }
  let height = 0;
  while (queue.size > 0) {
    let m = queue.size;
    for (let i = 0; i < m; i++) {
      let str = queue.dequeue();
      let [, index] = str.split(',');
      if (nodes[index].length > 0) {
        for (let j = 0; j < nodes[index].length; j++) {
          queue.enqueue(nodes[+index][j]);
        }
      }
    }
    height++;
  }
  return height + 1;
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    let n = +first;
    rl.question('', (second) => {
      console.log(treeHeight(n, second));
      rl.close();
    });
  });
};

processLineByLine();

/********

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.left == null) {
        current.left = newNode;
        return this;
      } else if (current.right == null && +current.left.value == value) {
        current.right = newNode;
        return this;
      } else if (current.right == null && +current.left.value != value) {
        current = current.left;
      } else {
        current = current.left;
      }
    }
  }
}

const compareNum = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};

class Node {
  constructor(value) {
    this.value = value;
    this.children = null;
    this.parents = null;
  }
}

  let tree = new BinaryTree();
  for (let i = 0; i < parents.length; i++) {
    tree.insert(+parents[i]);
  }

  let queue = [];
  queue.push(tree.root);
  let height = 0;
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift();
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    height++;
  }
  return height;

********/

/*********
const treeHeight = (n, second) => {
  let arr = second.split(' ');
  let parents = arr.map((el) => +el);

  let nodes = [];
  for (let i = 0; i <= n - 1; i++) {
    nodes.push([]);
  }

  let root;
  for (let chlidIndex = 0; chlidIndex <= n - 1; chlidIndex++) {
    let parentsIndex = parents[chlidIndex];
    if (parentsIndex == -1) {
      root = chlidIndex;
    } else {
      nodes[parentsIndex].push(parents[chlidIndex]);
    }
  }

  ---- native ---
  let maxHeight = 0;
  let height = 0;
  for (let i = 0; i <= nodes.length - 1; i++) {
    if (nodes[i].length > 0) {
      for (let j = 0; j <= nodes[i].length - 1; j++) {
        height = 0;
        let current = nodes[i][j];
        while (current != -1) {
          height += 1;
          current = parents[current];
        }
      }
      maxHeight = Math.max(maxHeight, height);
    }
  }
  return maxHeight + 1;
};


*******/
