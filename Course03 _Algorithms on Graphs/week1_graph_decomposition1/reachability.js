const readline = require('readline');

const explore = (adj, x, y, visited) => {
  if (adj[x].includes(y)) return 1;

  visited[x] = true;

  for (let i of adj[x]) {
    if (!visited[i]) {
      let j = explore(adj, i, y, visited);
      if (j == 1) return 1;
    }
  }
};

const reach = (input) => {
  let nm = input.shift();
  let [n, m] = nm;
  let xy = input.pop();
  let [x, y] = xy;

  let adj = [];
  for (let i = 0; i < +n; i++) {
    adj.push([]);
  }
  for (let i = 0; i < input.length; i++) {
    let [a, b] = input[i];
    adj[+a - 1].push(+b - 1);
    adj[+b - 1].push(+a - 1);
  }

  let visited = [];
  for (let i = 0; i <= +n + 1; i++) {
    visited.push(0);
  }

  //   console.log(adj);
  //   console.log(visited);

  const result = explore(adj, +x - 1, +y - 1, visited);

  if (result) {
    console.log(1);
  } else {
    console.log(0);
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

  reach(input);
};

processLineByLine();
