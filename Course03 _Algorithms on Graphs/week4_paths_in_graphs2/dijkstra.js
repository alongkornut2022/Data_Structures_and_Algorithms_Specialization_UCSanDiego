const readline = require('readline');

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const dijkstra = (input) => {
  let nm = input.shift();
  let [n, m] = nm.map((el) => +el);
  let st = input.pop();
  let [s, t] = st.map((el) => +el);

  let adj = [];
  let cost = [];
  for (let i = 0; i <= n; i++) {
    adj.push([]);
    cost.push([]);
  }

  for (let i = 0; i < m; i++) {
    let [x, y, c] = input[i].map((el) => +el);
    adj[x].push(y);
    cost[x].push(c);
  }

  //   console.log(adj);
  //   console.log(cost);

  let dist = [];
  let prev = [];
  for (let i = 0; i < adj.length; i++) {
    if (i == 0) {
      dist.push('-');
      prev.push('-');
    } else {
      dist.push(Infinity);
      prev.push(null);
    }
  }

  //   console.log(dist);

  dist[s] = 0;
  let h = new PriorityQueue();
  h.enqueue(s, s);

  while (h.values.length != 0) {
    let u = h.dequeue();
    for (let v of adj[u.val]) {
      let vIdx = adj[u.val].indexOf(v);
      if (dist[v] > dist[u.val] + cost[u.val][vIdx]) {
        dist[v] = dist[u.val] + cost[u.val][vIdx];
        h.enqueue(v, v);
      }
    }
  }

  if (dist[t] == Infinity) {
    return -1;
  } else {
    return dist[t];
  }
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

  console.log(dijkstra(input));
};

processLineByLine();
