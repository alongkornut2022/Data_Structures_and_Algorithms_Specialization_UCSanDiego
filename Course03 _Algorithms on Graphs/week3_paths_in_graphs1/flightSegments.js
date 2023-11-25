const readline = require('readline');

const distance = (input) => {
  let nm = input.shift();
  let [n, m] = nm;
  let st = input.pop();
  let [s, t] = st;

  let adj = [];
  for (let i = 0; i <= n; i++) {
    adj.push([]);
  }
  for (let i = 0; i < m; i++) {
    let [x, y] = input[i].map((el) => +el);
    adj[x].push(y);
    adj[y].push(x);
  }

  //   console.log(adj);

  let dist = [];
  for (let i = 0; i < adj.length; i++) {
    if (i == 0) {
      dist.push('-');
    } else {
      dist.push(Infinity);
    }
  }

  dist[s] = 0;
  let q = [s];
  let queue = [q];

  while (queue.length != 0) {
    let current = queue.pop();
    for (let node of adj[current]) {
      if (dist[node] == Infinity) {
        queue.unshift(node);
        dist[node] = dist[current] + 1;
        if (t == node) {
          return dist[node];
        }
      }
    }
  }
  return -1;
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

  console.log(distance(input));
};

processLineByLine();
