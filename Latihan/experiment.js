// [19, 0, 2]
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i]; // temp = 19
      arr[i] = arr[lowest]; // arr[0] = 0
      arr[lowest] = temp; // arr[1] = 19
    }
  }
  return arr;
}

console.log(selectionSort([19, 0, 2]));

console.log('hello');
