const readline = require('readline');

const checkBracketsInTheCode = (first) => {
  let str = first.split('');

  let stack = [];

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
      stack.push(str[i] + i);
    }

    if (str[i] == ')' || str[i] == ']' || str[i] == '}') {
      if (stack.length == 0) return i + 1;
      let last = stack.pop();
      let [top] = last.split('');

      if (
        !(top + str[i] == '()' || top + str[i] == '[]' || top + str[i] == '{}')
      )
        return i + 1;
    }
  }

  if (stack.length != 0) {
    let [, idx] = stack[0].split('');
    return +idx + 1;
  } else {
    return 'Success';
  }
};

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', (first) => {
    console.log(checkBracketsInTheCode(first));
    rl.close();
  });
};

processLineByLine();
