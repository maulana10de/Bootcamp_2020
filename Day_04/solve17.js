let x = '';
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    x += ' * ';
  }
  x += '\n';
}

console.log(x);
