const readline = require('readline');

class TreeOrders {
  Read(value) {
    let n = value.shift();
    this.key = [];
    this.left = [];
    this.right = [];
    for (let i = 0; i < n[0]; i++) {
      let a, b, c;
      [a, b, c] = value[i];
      this.key[i] = +a;
      this.left[i] = +b;
      this.right[i] = +c;
    }
  }

  /*   use Iteration and stack ... This case no build class node --- OK Pass */

  InOrder() {
    let result = [];
    let s = [];
    let x = 0;

    while (x != -1 || s.length > 0) {
      while (x != -1) {
        s.push(x);
        x = this.left[x];
      }
      x = s.pop();
      result.push(this.key[x]);
      x = this.right[x];
    }
    return result.join(' ');
  }

  PreOrder() {
    let result = [];
    let s = [];
    let x = 0;
    while (x != -1 || s.length > 0) {
      while (x != -1) {
        result.push(this.key[x]);
        if (this.right[x] != -1) {
          s.push(this.right[x]);
        }
        x = this.left[x];
      }
      if (s.length > 0) {
        x = s.pop();
      }
    }
    return result.join(' ');
  }

  PostOrder() {
    let result = [];
    let s1 = [];
    let s2 = [];

    let x = 0;

    s1.push(x);

    while (s1.length > 0) {
      let temp = s1.pop();
      s2.push(temp);

      if (this.left[temp] != -1) s1.push(this.left[temp]);
      if (this.right[temp] != -1) s1.push(this.right[temp]);
    }

    while (s2.length > 0) {
      let temp = s2.pop();
      result.push(this.key[temp]);
    }
    return result.join(' ');
  }
}

const processLineByLine = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let value = [];
  for await (let line of rl) {
    value.push(line.split(' '));
  }

  let tree = new TreeOrders();

  tree.Read(value);

  console.log(tree.InOrder());
  console.log(tree.PreOrder());
  console.log(tree.PostOrder());
};

processLineByLine();

///////////////////////////////////

/*
This is really important as because test case 21 and 
above will put quite a large number of input and 
without these lines of code you will get wrong answer/errors 
because of stackoverflow.

สิ่งนี้สำคัญมาก เนื่องจากกรณีทดสอบ 21 ขึ้นไปจะใส่อินพุตจำนวนมาก 
และหากไม่มีบรรทัดโค้ดเหล่านี้ 
คุณจะได้รับคำตอบ/ข้อผิดพลาดที่ผิดเนื่องจาก Stackoverflow

Re test case #21: If you are using javascript, 
this will likely overflow your call stack if you use recursion, eg. 
the pseudo-code in the lectures. 
You need to implement iterative traversals with explicit stacks.

กรณีทดสอบอีกครั้ง #21: หากคุณใช้จาวาสคริปต์ 
สิ่งนี้มีแนวโน้มที่จะล้น call stack ของคุณ
หากคุณใช้การเรียกซ้ำ เช่น รหัสเทียมในการบรรยาย 
คุณต้องใช้การข้ามผ่านแบบวนซ้ำด้วยสแต็กที่ชัดเจน


*/

/////////////////////////////

/*  use Recursive --- stack overflow    */

// let result = [];
// let x = 0;
// const traverse = (x) => {
//   if (x != -1) {
//     traverse(this.left[x]);
//     result.push(this.key[x]);
//     traverse(this.right[x]);
//   } else {
//     return;
//   }
// };
// traverse(x);
// return result.join(' ');

// let result = [];
// let x = 0;
// const traverse = (x) => {
//   if (x != -1) {
//     result.push(this.key[x]);
//     traverse(this.left[x]);
//     traverse(this.right[x]);
//   } else {
//     return;
//   }
// };
// traverse(x);
// return result.join(' ');

// let result = [];
// let x = 0;
// const traverse = (x) => {
//   if (x != -1) {
//     traverse(this.left[x]);
//     traverse(this.right[x]);
//     result.push(this.key[x]);
//   } else {
//     return;
//   }
// };
// traverse(x);
// return result.join(' ');

////////////////////////////////////

/*   use Iteration and stack ... This case build class node --- OK Pass */

//   inorder() {
//     var s = [];
//     var curr = root;

//     while (curr != null || s.length > 0) {
//       while (curr != null) {
//         s.push(curr);
//         curr = curr.left;
//       }
//       curr = s.pop();
//       console.log(curr.data + ' ');
//       curr = curr.right;
//     }
//   }

// preorderiterative(node) {
//     if (node == null) {
//       return;
//     }
//     let st = [];
//     let curr = node;

//     while (curr != null || st.length > 0) {
//       while (curr != null) {
//         document.write(curr.data + ' ');
//         if (curr.right != null) {
//           st.push(curr.right);
//           curr = curr.left;
//         }
//       }

//       if (st.length > 0) {
//         curr = st.pop();
//       }
//     }
//   }

//   postOrderIterative(root) {
//     var s1 = [];
//     var s2 = [];

//     if (root == null) return;

//     s1.push(root);

//     while (s1.length > 0) {
//       var temp = s1.pop();
//       s2.push(temp);

//       if (temp.left != null) s1.push(temp.left);
//       if (temp.right != null) s1.push(temp.right);
//     }

//     while (s2.length > 0) {
//       var temp = s2.pop();
//       document.write(temp.data + ' ');
//     }
//   }

////////////////////////////////
