const readline = require('readline');

const computePrefix = (text) => {
  let s = [];
  s[0] = 0;
  let border = 0;

  for (let idx = 1; idx < text.length; idx++) {
    while (border > 0 && text[idx] != text[border]) {
      border = s[border - 1];
    }
    if (text[idx] == text[border]) {
      border += 1;
    } else {
      border = 0;
    }
    s[idx] = border;
  }
  return s;
};

const findPattern = (pattern, text) => {
  if (pattern.length > text.length) return [].join(' ');

  let x = pattern + '$' + text;
  let s = computePrefix(x);
  //   console.log(s);
  let result = [];

  for (let idx = pattern.length + 1; idx <= x.length; idx++) {
    if (s[idx] == pattern.length) {
      result.push(idx - 2 * pattern.length);
    }
  }

  return result.join(' ');
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (pattern) => {
  rl.question('', (text) => {
    console.log(findPattern(pattern, text));
  });
});
