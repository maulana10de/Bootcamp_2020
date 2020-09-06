let txt = 'manual';
let x = '';
for (let i = 0; i < txt.length; i++) {
  for (let j = 0; j <= i; j++) {
    x += `${txt.charAt(j)} `;
  }
  x += '\n';
}

console.log(x);
