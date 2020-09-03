/*
Object : penampung data seperti array tetapi datanya tidak berurutan seperti array

*/

// Membuat object dengan Class

// class Hewan {
//   constructor(_name, _jenis, _makanan) {
//     this.name = _name;
//     this.jenis = _jenis;
//     this.makanan = _makanan;
//   }
// }

// let ular = new Hewan('python', 'reptil', 'tikus');

// // console.log(ular.name);
let produk = [
  { nama: 'Apel', harga: 10000, stock: 10 },
  { nama: 'Mangga', harga: 15000, stock: 10 },
  { nama: 'Jeruk', harga: 20000, stock: 10 },
  { nama: 'Semangka', harga: 30000, stock: 10 },
];

// //
// let list = '';
// for (let i = 0; i < produk.length; i++) {
//   list += `${i + 1}. ${produk[i].nama} harga ${produk[i].harga} stock ${
//     produk[i].stock
//   }\n`;
// }

// // menggunakan map untuk looping
// produk.map((key, i) => {
//   list += `${i + 1}.${key.nama} - ${key.harga} \n`;
// });

// console.log(list);

// class Produk {
//   constructor(_nama, _harga, _stock) {
//     this.nama = _nama;
//     this.harga = _harga;
//     this.stock = _stock;
//   }
// }

// let apel = new Produk('Apel', 20000, 10);

console.log(produk.splice(0, 1));
console.log('---------------------------');
console.log(produk.splice(1, 1));
console.log('---------------------------');
console.log(produk.indexOf(produk[0]));
