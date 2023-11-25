const readline = require('readline');

const dfs = (x, visited, adj) => {
  visited[x] = true;

  for (let node of adj[x]) {
    if (!visited[node]) {
      dfs(node, visited, adj);
    }
  }
  return visited;
};

const numberOfComponents = (input) => {
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

  //   console.log(adj);

  let count = 0;

  let visited = [];
  for (let i = 0; i < adj.length; i++) {
    if (i == 0) {
      visited.push(0);
    } else {
      visited.push(false);
    }
  }

  //   console.log(visited);

  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      visited = dfs(i, visited, adj);
      count += 1;
    }
  }
  return count;
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

  console.log(numberOfComponents(input));
};

processLineByLine();
