let txt = 'jakarta';
let x = '';
for (let i = 0; i < txt.length; i++) {
  for (let j = 0; j <= i; j++) {
    x += `${txt.charAt(j)} `;
  }
  x += '\n';
}

for (let k = txt.length - 2; k >= 0; k--) {
  for (let l = 0; l <= k; l++) {
    x += `${txt.charAt(l)} `;
  }
  x += '\n';
}

console.log(x);
