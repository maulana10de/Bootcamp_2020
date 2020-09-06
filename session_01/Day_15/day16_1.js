// // console.log(Math.floor(Math.random() * 10));
// let arr = [];
// for (let i = 0; i < 6; i++) {
//   let numRandom = Math.floor(Math.random() * 10);
//   numRandom % 2 == 0 ? arr.push(-Math.abs(numRandom)) : arr.push(numRandom);
// }
// console.log(arr);

for (var m = 1; m <= no; m++) {
  for (var n = 1; n <= m; n++) {
    document.write('0' + n + ' ');
  }
  document.write('<br />');
}
