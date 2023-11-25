const readline = require('readline');

class Query {
  constructor(query) {
    this.type = query[0];
    if (this.type == 'check') {
      this.idx = +query[1];
    } else {
      this.str = query[1];
    }
  }
}

class QueriesProcess {
  constructor(bucketCount) {
    this.bucketCount = bucketCount;
    this.elems = [];
    for (let x = 1; x <= bucketCount; x++) {
      this.elems.push([]);
    }
    this.multiplier = 263;
    this.prime = 1000000007;
  }

  hashFunc(str) {
    let strings = str.split('').reverse().join('');
    let ans = 0;
    for (let c = 0; c <= strings.length - 1; c++) {
      ans = (ans * this.multiplier + strings[c].charCodeAt()) % this.prime;
    }
    return ans % this.bucketCount;
  }

  writeSearchResult(wasFound) {
    if (wasFound == true) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }

  writeChain(chain) {
    console.log(chain.join(' '));
  }

  processQuery(querys) {
    for (let query of querys) {
      if (query.type == 'check') {
        if (this.elems[query.idx].length == 0) {
          console.log();
        } else {
          this.writeChain(this.elems[query.idx]);
        }
      } else {
        let hashValue = this.hashFunc(query.str);
        if (query.type == 'find') {
          if (this.elems[hashValue].includes(query.str)) {
            this.writeSearchResult(true);
          } else {
            this.writeSearchResult(false);
          }
        } else if (query.type == 'add') {
          if (!this.elems[hashValue].includes(query.str)) {
            this.elems[hashValue].splice(0, 0, query.str);
          }
        } else {
          if (this.elems[hashValue].includes(query.str)) {
            let ind = this.elems[hashValue].indexOf(query.str);
            this.elems[hashValue].splice(ind, 1);
          }
        }
      }
    }
  }
}

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let queries = [];
  for await (let line of rl) {
    queries.push(new Query(line.split(' ')));
  }

  let bucketCount = +queries[0].type;
  let proc = new QueriesProcess(bucketCount);

  queries.shift();
  queries.shift();
  proc.processQuery(queries);
};

processLineByLine();
