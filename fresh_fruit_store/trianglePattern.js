function trianglePattern() {
  let x = '';
  for (let i = 5; i >= 1; i--) {
    for (let j = i; j <= 5; j++) {
      x += `${j} `;
      // console.log(j);
    }
    x += '\n';
  }
  return x;
}

console.log(trianglePattern());
