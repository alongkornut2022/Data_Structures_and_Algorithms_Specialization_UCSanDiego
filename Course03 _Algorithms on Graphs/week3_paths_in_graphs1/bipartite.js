const readline = require('readline');

const bipartite = (input) => {
  let nm = input.shift();
  let [n, m] = nm;

  let adj = [];
  for (let i = 0; i <= n; i++) {
    adj.push([]);
  }
  for (let i = 0; i < m; i++) {
    let [x, y] = input[i].map((el) => +el);
    adj[x].push(y);
    adj[y].push(x);
  }

  // console.log(adj);

  let color = [];
  for (let i = 0; i < adj.length; i++) {
    if (i == 0) {
      color.push('-');
    } else {
      color.push(null);
    }
  }
  // console.log(color);

  for (let x = 1; x < adj.length; x++) {
    if (color[x] === null) {
      color[x] = 0;
    }
    for (let node of adj[x]) {
      if (color[node] === null) {
        color[node] = color[x] ^ 1;
      }
    }
  }

  for (let x = 1; x < adj.length; x++) {
    for (let node of adj[x]) {
      // console.log(color[node], color[x]);
      if (color[node] == color[x]) return 0;
    }
  }
  return 1;
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

  console.log(bipartite(input));
};

processLineByLine();
