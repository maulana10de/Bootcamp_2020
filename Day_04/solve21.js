let x = '';
for (i = 1; i <= 5; i++) {
  for (j = i; j < 5; j++) {
    x += '   ';
  }
  for (k = 1; k < i * 2; k++) {
    x += ' * ';
  }
  x += '\n';
}

for (i = 5; i >= 1; i--) {
  for (j = 5; j > i; j--) {
    x += '   ';
  }
  for (k = 1; k < i * 2; k++) {
    x += ' * ';
  }
  x += '\n';
}

console.log(x);
