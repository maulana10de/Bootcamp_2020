// Duplicate Map
dupMap = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 100 && arr[i] >= 80) {
      newArr.push('Lulus');
    } else if (arr[i] <= 79 && arr[i] >= 0) {
      newArr.push('Remed');
    }
  }
  return newArr;
};

console.log(dupMap([90, 80, 70, 90, 40])); // output [Lulus, Lulus, Remed, Lulus, Remed]
