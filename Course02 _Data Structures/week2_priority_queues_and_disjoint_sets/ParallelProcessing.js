const readline = require('readline');

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// class jobs {
//   constructor(this, timeTaken, processingStarted = 0) {
//     this.timeTaken = timeTaken;
//     this.processingStarted = processingStarted;
//   }
//   lt(this, other) {
//     if (this.processing_started == other.processing_started) {
//       return this.time_taken < other.time_taken;
//     } else {
//       return this.processing_started < other.processing_started;
//     }
//   }
//   gt(this, other) {
//     if (this.processing_started == other.processing_started) {
//       return this.time_taken > other.time_taken;
//     } else {
//       return this.processing_started > other.processing_started;
//     }
//   }
// }

const assignJobs = (nWorkers, nJobs, jobTime) => {
  let pQ = new PriorityQueue();
  let result = [];

  let queueCapacity = [];
  for (let i = 0; i <= nWorkers.length - 1; i++) {
    let i = new jobs();
    queueCapacity.push(i);
  }

  for (let n = 0; n <= nJobs - 1; n++) {
    let currentWorker;

    result.push(currentWorker + ' ' + ' ');
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

  rl.question('', (first) => {
    let fLine = first.split(' ').map((el) => +el);
    let [nWorkers, nJobs] = fLine;
    rl.question('', (second) => {
      let jobTime = second.split(' ').map((el) => +el);
      assignJobs(nWorkers, nJobs, jobTime);
      rl.close();
    });
  });
};

processLineByLine();
