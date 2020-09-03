// // patern segitigaSiku
// // 1
// // 121
// // 12321
// // 1234321
// // function segitigaSiku() {
// //   let odd = 1;
// //   let x = '';
// //   for (let i = 1; i <= 4; i++) {
// //     let k = 0;
// //     for (let j = 1; j <= odd; j++) {
// //       j <= i ? (k += 1) : (k -= 1);
// //       x += k;
// //     }
// //     x += '\n';
// //     odd += 2;
// //   }
// //   return x;
// // }

// // function segitigaDoubleSiku() {
// //   let x = '';
// //   for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= i; j++) {
// //       x += '*';
// //     }
// //     x += '\n';
// //   }
// //   for (let i = 4; i >= 1; i--) {
// //     for (let j = 1; j <= i; j++) {
// //       x += '*';
// //     }
// //     x += '\n';
// //   }
// //   return x;
// // }

// // function segitigaDoubleSiku() {
// //   let x = '';
// //   let spasi = 4;
// //   for (let i = 1; i <= 5; i++) {
// //     for (let j = spasi; j >= 1; j--) {
// //       x += ' ';
// //     }
// //     for (let j = 1; j <= i; j++) {
// //       x += i + ' ';
// //     }
// //     x += '\n';
// //     spasi -= 1;
// //   }

// //   return x;
// // }

// // console.log(segitigaDoubleSiku());

// let dbUser = [
//   {
//     username: 'admin',
//     email: 'admin@gmail.com',
//     password: 'admin123',
//     role: 'admin',
//     keranjang: [
//       {
//         id: 1,
//         nama: 'Mangga',
//         foto:
//           'https://fitshop-production.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/06/30222008/Mangga-Indramayu.jpg',
//         desk: 'Lorem ipsum',
//         stock: 5,
//         price: 20000,
//       },
//       {
//         id: 2,
//         nama: 'Apel',
//         foto: 'https://doktersehat.com/wp-content/uploads/2014/05/apel.jpg',
//         desk: 'Lorem ipsum',
//         stock: 7,
//         price: 50000,
//       },
//     ],
//   },
//   {
//     username: 'ade',
//     email: 'ade@gmail.com',
//     password: 'ade123',
//     role: 'user',
//     keranjang: [],
//   },
//   {
//     username: 'zahra',
//     email: 'zahra@gmail.com',
//     password: 'zahra123',
//     role: 'user',
//     keranjang: [],
//   },
// ];

// dbUser[0].keranjang.map((item, i) => {
//   item.id == 10 ? console.log('cocok') : false;
// });

// // console.log(dbUser[0].keranjang[1].nama);

let number1 = [{ idZ: 1, idP: [{ id: 1 }] }];
let number2 = [{ id: 1 }];

let index = number2.findIndex((item) => item.id == number1[0].idP[0].id);

console.log(index);
