let arr = [
  {
    idProduct: 1,
    nama: 'Mangga',
    foto:
      'https://fitshop-production.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/06/30222008/Mangga-Indramayu.jpg',
    desk: 'Lorem ipsum',
    stock: 5,
    price: 20000,
  },
  {
    idProduct: 2,
    nama: 'Apel',
    foto: 'https://doktersehat.com/wp-content/uploads/2014/05/apel.jpg',
    desk: 'Lorem ipsum',
    stock: 7,
    price: 50000,
  },
  {
    idProduct: 3,
    nama: 'Jeruk',
    foto:
      'https://static.republika.co.id/uploads/images/inpicture_slide/buah-jeruk-_180709133955-829.jpg',
    desk: 'Lorem ipsum ipsum',
    stock: 10,
    price: 70000,
  },
  {
    idProduct: 4,
    nama: 'Semangka',
    foto:
      'https://www.sahabatnestle.co.id/uploads/media/article/0001/03/thumb_2377_article_image_723x480.jpeg',
    desk: 'Lorem ipsum',
    stock: 20,
    price: 100000,
  },
];

// selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j].nama > arr[lowest].nama) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) {
//       let temp = arr[i].nama;
//       arr[i].nama = arr[lowest].nama;
//       arr[lowest].nama = temp;
//     }
//   }
//   return arr;
// };

selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].price > arr[lowest].price) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i].price;
      arr[i].price = arr[lowest].price;
      arr[lowest].price = temp;
    }
  }
  return arr;
};

console.log(selectionSort(arr));
