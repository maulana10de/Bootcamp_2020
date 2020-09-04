// Looping bilangan Ganjil
checkEven = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % 2 != 0) {
      return 1;
    }
  }
};

let count = 1;
let rows = 5;
let elem = '';

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    while (!checkEven(count)) {
      count++;
    }
    elem += ` ${count} `;
    count++;
  }
  elem += `\n`;
}

console.log(elem);

// Looping bilangan Genap
checkOdd = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % 2 == 0) {
      return 1;
    }
  }
};

let space = '    ';

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows; j++) {
    while (!checkOdd(count)) {
      count++;
    }
    if (j <= rows - i) {
      elem += space;
    } else {
      elem += ` ${count} `;
      count++;
    }
  }
  elem += `\n`;
}

console.log(elem);
