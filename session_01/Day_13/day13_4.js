let x = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j == i) {
      x += j;
    } else {
      x += 0;
    }
  }
  i < 5 ? (x += '\n') : null;
}

console.log(x);
