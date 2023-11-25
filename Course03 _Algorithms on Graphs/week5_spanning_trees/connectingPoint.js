const readline = require('readline');

class Node {
  constructor(i, j, dist) {
    this.i = i;
    this.j = j;
    this.dist = dist;
  }
}

const compareNumeric = (a, b) => {
  if (a.dist > b.dist) return 1;
  if (a.dist === b.dist) return 0;
  if (a.dist < b.dist) return -1;
};

const connectingPoint = (input) => {
  let [n] = input.shift().map((el) => +el);

  let x = [];
  let y = [];
  for (let i = 0; i < n; i++) {
    let [xi, yi] = input[i].map((el) => +el);
    x.push(xi);
    y.push(yi);
  }

  console.log(x);
  console.log(y);

  let nodeDistance = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let xDistance = (x[i] - x[j]) ** 2;
      let yDistance = (y[i] - y[j]) ** 2;
      let dist = Math.sqrt(xDistance + yDistance);
      let newNode = new Node(i, j, dist);
      nodeDistance.push(newNode);
    }
  }

  console.log(nodeDistance);
  nodeDistance.sort(compareNumeric);

  let unionVertices = [];
  for (let i = 0; i < n; i++) {
    unionVertices.push(i);
  }
  let finalNodes = [];
  let result = 0;
  for (let node of nodeDistance) {
    if (unionVertices[node.i] != unionVertices[node.j]) {
      finalNodes.push(node);
      result += node.dist;

      // for (let idx = 0; idx < unionVertices.length; idx++) {
      //   if (unionVertices[idx] == unionVertices[node.j]) {
      //     unionVertices[idx] = unionVertices[node.i];
      //   } else {
      //     unionVertices[idx] = unionVertices[idx];
      //   }
      // }

      unionVertices.map((el) => {
        if (el == unionVertices[node.j]) {
          let index = unionVertices.indexOf(el);
          unionVertices.splice(index, 1, unionVertices[node.i]);
        }
      });
    }
  }

  console.log(unionVertices);
  console.log(finalNodes);

  // if (finalNodes.length >= n) {
  //   for (let i = finalNodes.length; i >= n; i--) {
  //     finalNodes.pop();
  //   }
  // }
  // for (let v of finalNodes) {
  //   result += v.dist;
  // }

  return result.toFixed(9);
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  for await (let line of rl) {
    input.push(line.split(' '));
  }

  console.log(connectingPoint(input));
};

processLineByLine();
