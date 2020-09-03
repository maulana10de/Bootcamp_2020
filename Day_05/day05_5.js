let kalimat = 'ade maulana';

let kapital = '';
for (let i = 0; i < kalimat.length; i++) {
  if (i == 0) {
    kapital += kalimat.charAt(i).toUpperCase();
  } else if (i > 0) {
    kapital += kalimat.charAt(i).toLowerCase();
    if (kalimat.charAt(i) == ' ') {
      i = 0;
      if (i == 0) {
        kapital += kalimat.charAt(i).toUpperCase();
      }
    }
  }
}

console.log(kapital);
