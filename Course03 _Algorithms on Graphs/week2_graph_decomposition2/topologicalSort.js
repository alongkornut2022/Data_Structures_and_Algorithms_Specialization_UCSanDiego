const readline = require('readline');

const dfs = (adj, visited, order, x) => {
  //   console.log(order);
  if (order.length != adj.length - 1) {
    for (let node of adj[x]) {
      if (!visited[node]) {
        dfs(adj, visited, order, node);
      }
    }

    let all = [];
    for (let v of adj[x]) {
      if (visited[v] == 1) {
        all.push(1);
      } else {
        all.push(0);
      }
    }
    console.log(x, visited[x], adj[x].length, all);

    if (visited[x] == 0 && (adj[x].length == 0 || !all.includes(0))) {
      order.unshift(x);
      visited[x] = 1;
    }
  }
};

const topologicalSort = (input) => {
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

  console.log(adj);

  let visited = [];
  for (let i = 0; i < adj.length; i++) {
    if (i == 0) {
      visited.push(' ');
    } else {
      visited.push(0);
    }
  }

  let order = [];
  for (let vertex = 1; vertex < adj.length; vertex++) {
    dfs(adj, visited, order, vertex);
  }
  return order.join(' ');
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

  console.log(topologicalSort(input));
};

processLineByLine();
