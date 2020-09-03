let x = [40, 100, 1, 5, 25, 10];
// console.log(x.sort());
x.sort((a, b) => a - b); // [ 1, 10, 100, 25, 40, 5 ] sort asc
// x.sort((a, b) => b - a); // [ 100, 40, 25, 10, 5, 1 ] sort desc

console.log(x[0]); // nilai min 1

console.log(x[x.length - 1]); // nilai max 100
