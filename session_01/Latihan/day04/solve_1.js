// for (let i = 1; i <= 10; i++) {
//   console.log(`Nomor urut ${i}`);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(`Nomor urut ${i}`);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(`Nomor urut ${i}`);
// }

// let z = '';
// for (let i = 0; i < 5; i++) {
//   console.log((z += '*'));
// }

// let z = '';
// for (let i = 0; i < 5; i++) {
//   console.log((z += ' * '));
// }

// let z = '';
// for (let i = 6; i > 0; i--) {
//   for (let j = 1; j < i; j++) {
//     z += ' * ';
//   }
//   z += '\n';
// }

// console.log(z);

let z = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 4; j >= i; j--) {
    z += '';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    z += '*';
  }
  z += '\n';
}

console.log(z);
