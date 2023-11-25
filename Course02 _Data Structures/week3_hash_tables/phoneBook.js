const readline = require('readline');

let queries = [];

class Query {
  constructor(query) {
    this.type = query[0];
    this.number = +query[1];
    if (this.type == 'add') {
      this.name = query[2];
    }
  }
}

const processQueries = (queries) => {
  let result = [];
  let phoneBook = [];

  for (let curQuery of queries) {
    if (curQuery.type == 'add') {
      phoneBook[curQuery.number] = curQuery.name;
    } else if (curQuery.type == 'del') {
      phoneBook[curQuery.number] = 0;
    } else if (curQuery.type == 'find') {
      if (
        phoneBook[curQuery.number] == 0 ||
        phoneBook[curQuery.number] == undefined
      ) {
        result.push('not found');
      } else {
        result.push(phoneBook[curQuery.number]);
      }
    } else {
    }
  }

  for (let i = 0; i <= result.length - 1; i++) {
    console.log(result[i]);
  }
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  for await (let line of rl) {
    queries.push(new Query(line.split(' ')));
  }

  processQueries(queries);
};

processLineByLine();
