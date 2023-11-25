const readline = require('readline');

let weight = [];
let cost = [];
let w;

const maximunLoot = (w, weight, cost) => {
  if (w <= 0 || weight.length === 0) {
    return 0;
  }

  let m;
  let mostExpensive = 0;
  for (let i = 0; i <= weight.length - 1; i++) {
    let tempMost = cost[i] / weight[i];
    if (tempMost > mostExpensive) {
      mostExpensive = tempMost;
      m = i;
    }
  }

  let amount = Math.min(w, weight[m]);
  let value = (cost[m] * amount) / weight[m];

  w -= weight[m];
  weight.splice(m, 1);
  cost.splice(m, 1);

  return value + maximunLoot(w, weight, cost);
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  for await (const line of rl) {
    let [ci, wi] = line.split(' ');
    cost.push(+ci);
    weight.push(+wi);
  }

  cost.shift();
  w = weight.shift();
  console.log(maximunLoot(w, weight, cost).toFixed(4));
};

processLineByLine();
