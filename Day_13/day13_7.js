let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function textGen(arr) {
  let res = '';
  for (let i = 0; i < 3; i++) {
    let xGen = '',
      xGan = '',
      xOth = '';
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 == 0) {
        xGen += `${arr[j]} `;
        xOth += `-- `;
      } else if (arr[j] % 2 != 0) {
        xGan += `${arr[j]} `;
        xOth += `- `;
      }
    }
    res = `${xGen}\n ${xOth} Jalan Thamrin\n ${xGan}`;
    return res;
  }
}

console.log(textGen(arr));
