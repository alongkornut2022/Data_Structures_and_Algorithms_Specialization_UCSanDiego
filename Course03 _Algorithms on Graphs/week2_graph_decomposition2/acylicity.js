const readline = require('readline');

const explore = (adj, x, y, visited) => {
  if (adj[x].includes(y)) return 1;

  visited[x] = true;
  for (let node of adj[x]) {
    if (!visited[node]) {
      let j = explore(adj, node, y, visited);
      if (j == 1) return 1;
    }
  }
};

const acyclic = (input) => {
  let nm = input.shift();
  let [n, m] = nm;

  let adj = [];
  for (let i = 0; i <= n; i++) {
    adj.push([]);
  }
  for (let i = 0; i < m; i++) {
    let [x, y] = input[i].map((el) => +el);
    adj[x].push(y);
  }

  //   console.log(adj);

  let visited = [];
  for (let i = 0; i < adj.length; i++) {
    if (i == 0) {
      visited.push(0);
    } else {
      visited.push(false);
    }
  }

  for (let x = 1; x < adj.length; x++) {
    let cycle = explore(adj, x, x, visited);
    if (cycle == 1) return 1;
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

  const curriculum = acyclic(input);
  if (curriculum) {
    console.log(1);
  } else {
    console.log(0);
  }
};

processLineByLine();
