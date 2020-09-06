// let x = '';
// for (let i = 1; i < 2; i++) {
//   for (let j = 5; j >= 1; j--) {
//     for (let k = 1; k <= j; k++) {
//       x += ' * ';
//     }
//     x += '\n';
//   }
//   for (let m = 1; m <= 5; m++) {
//     for (let n = 1; n <= m; n++) {
//       x += ' * ';
//     }
//     x += '\n';
//   }
// }

let x = '';
for (let i = 1; i < 2; i++) {
  for (let j = 5; j >= 1; j--) {
    for (let k = 1; k <= j; k++) {
      x += ' * ';
    }
    x += '\n';
  }
  for (let m = 1; m <= 4; m++) {
    for (let n = 1; n <= m + 1; n++) {
      x += ' * ';
    }
    x += '\n';
  }
}

console.log(x);
