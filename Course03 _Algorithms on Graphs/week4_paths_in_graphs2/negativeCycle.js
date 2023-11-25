const readline = require('readline');

const negativeCycle = (input) => {
  let nm = input.shift();
  let [n, m] = nm.map((el) => +el);

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
  for (let i = 0; i < adj.length; i++) {
    if (i == 0) {
      dist.push('not use');
    } else {
      dist.push(null);
    }
  }

  //   console.log(dist);

  dist[1] = 0;
  let distListPrev = 0;
  let distListCurr = 0;

  for (let i = 1; i < adj.length; i++) {
    for (let u = 1; u < adj.length; u++) {
      for (let v of adj[u]) {
        let vIdx = adj[u].indexOf(v);
        if (dist[v] > dist[u] + cost[u][vIdx]) {
          dist[v] = dist[u] + cost[u][vIdx];
        }
      }
    }

    if (i == adj.length - 2) {
      for (let j = 1; j < dist.length; j++) {
        distListPrev = distListPrev + dist[j];
      }
    }

    if (i == adj.length - 1) {
      for (let j = 1; j < dist.length; j++) {
        distListCurr = distListCurr + dist[j];
      }
    }
  }
  //   console.log(distListPrev, distListCurr);

  if (distListPrev == distListCurr) {
    return 0;
  } else {
    return 1;
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

  console.log(negativeCycle(input));
};

processLineByLine();
