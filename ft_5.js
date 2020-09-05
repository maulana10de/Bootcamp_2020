// Duplicate Filter
dupFilter = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 80 ? newArr.push(arr[i]) : null;
  }
  return newArr;
};

console.log(dupFilter([90, 80, 70, 90, 40]));
