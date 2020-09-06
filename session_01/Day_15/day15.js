printPrimeNumber = (num) => {
  let arr = [];
  let x = '';
  for (let i = 2; i <= num; i++) {
    let bukanPrima = false;
    for (let j = 2; j <= i; j++) {
      i % j === 0 && j !== i ? (bukanPrima = true) : null;
    }
    bukanPrima === false ? arr.push(i) : null;
  }

  // let inNum = 0;

  // for (let x = 1; x <= arr.length; x++) {
  //   for (let y = 1; y <= x; y++) {
  //     x += arr[inNum];
  //   }
  //   x += '\n';
  // }
  for (let z = 0; z < 4; z++) {
    for (let i = 0; i <= z; i++) {
      console.log(arr[i]);
    }
    console.log('\n');
  }
};

printPrimeNumber(30);

// for (let i = 2; i <= 20; i++) {
//   let bukanPrima = false;
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j !== i) {
//       bukanPrima = true;
//     }
//   }
//   if (bukanPrima === false) {
//     console.log(i, 'prima');
//   }
// }

// let x = '';
// for (let i = 2; i <= 20; i++) {
//   let bukanPrima = false;
//   for (let j = 2; j <= i; j++) {
//     if (i % j === 0 && j !== i) {
//       bukanPrima = true;
//     }
//   }
//   if (bukanPrima === false) {
//     console.log(i);
//   }
// }

// console.log(x);
// let z = '';
// for (let x = 1; x <= 8; x++) {
//   for (let y = 1; y <= x; y++) {
//     z += y;
//   }
//   z += '\n';
// }

// var rows,
//   m,
//   n,
//   num = 1;
// rows = [2, 3, 5, 7, 11, 13, 17];
// let x = '';
// for (m = 1; m <= rows.length; m++) {
//   for (n = 1; n <= m; n++) {
//     x += rows[m] + ' ';
//     m++;
//   }
//   x += '\n';
// }

// console.log(x);
