const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const maxPairwiseProduct = (n, number) => {
  if (n == 2) {
    return number.reduce((acc, el) => (acc *= el), 1);
  }

  n = number.length - 1;

  let index = 0;
  for (let i = 1; i <= n; i++) {
    if (+number[i] > +number[index]) {
      index = i;
    }
  }
  [number[index], number[n]] = [number[n], number[index]];

  index = 0;
  for (let i = 1; i <= n - 1; i++) {
    if (+number[i] > +number[index]) {
      index = i;
    }
  }
  [number[index], number[n - 1]] = [number[n - 1], number[index]];
  return number[n - 1] * number[n];
};

rl.question('', (first) => {
  let n = parseInt(first);
  rl.question('', (second) => {
    let number = second.split(' ');
    console.log(maxPairwiseProduct(n, number));
    rl.close();
  });
});

// rl.question('', (first) => {
//   rl.question('', (second) => {
//     let number = String(second).split(' ');
//     let n = number.length;
//     let index1 = 0;
//     let index2 = 0;

//     for (let i = 0; i < n; i++) {
//       index1 = Math.max(index1, number[i]);
//     }
//     for (let i = 0; i < n; i++) {
//       if (index1 != number[i]) {
//         index2 = Math.max(index2, number[i]);
//       }
//     }
//     console.log(index1 * index2);
//     rl.close();
//   });
// });

// ----- Naive Algorithm ------

// const maxPairwiseProduct = (input) => {
//   let n = input.length;
//   let maxProduct = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       maxProduct = Math.max(maxProduct, input[i] * input[j]);
//     }
//   }
//   console.log(maxProduct);
// };

// const maxPairwiseProduct = (n, number) => {
//   let product = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       product = Math.max(product, number[i] * number[j]);
//     }
//   }
//   return product;
// };

/* pseudocode
MaxPairwiseProductFast(A[1...n]):
index ← 1
for i from 2 to n:
if A[i] > A[index]:
index ← i
swap A[index] and A[n]
index ← 1
for i from 2 to n − 1:
if A[i] > A[index]:
index ← i
swap A[index] and A[n − 1]
return A[n − 1] · A[n]


*/

// const maxPairwiseProduct = () => {
//   let number = [];

//   for (let i = 1; i <= input; i++) {
//     number.push(i);
//   }
//   console.log(number);

//   let n = Math.floor((Math.random() % 10) + 2);
//   for (let i = 0; i < n; i++) {
//     number.push(Math.floor(Math.random() % 10000));
//   }

//   let index1 = 0;
//   let index2 = 0;

//   for (let i = 0; i < number.length; i++) {
//     index1 = Math.max(index1, number[i]);
//   }

//   for (let i = 0; i < number.length; i++) {
//     if (index1 != number[i]) {
//       index2 = Math.max(index2, number[i]);
//     }
//   }
//   console.log(index1 * index2);
// };
