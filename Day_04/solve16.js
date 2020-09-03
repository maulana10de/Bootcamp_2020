let x = '';
for (let i = 1; i < 5; i++) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      x += 1 - 1;
    } else {
      x += 2;
    }
  }
  x += '\n';
}

console.log(x);
