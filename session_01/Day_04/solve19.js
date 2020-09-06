let x = '';
for (let i = 1; i <= 10; i++) {
  // print space
  for (let j = i; j < 10; j++) {
    x += '   ';
  }

  // print *
  for (let k = 1; k < i * 2; k += 1) {
    x += ' * ';
  }
  x += '\n';
}

console.log(x);
