// // String
// let x = 'HelloWorld';

// console.log('Panjang String/Text : ', x.length);
// console.log('Mencari index :', x.indexOf('o'));
// console.log(x.substr(0, 2)); // Mengambil text
// console.log(x.slice(6)); // Mengambil text berdasarkan dua parameter index
// console.log(x.split('')); // Menjadi tipe data array

// let a = x.split('');

// a.forEach((huruf, i) => {
//   console.log(huruf, i);
// });

// let value = '2020';
// let decimal = '1.7';

// console.log(value);
// console.log(parseInt(value));
// console.log(parseFloat(value));

// console.log(parseInt(decimal));
// console.log(parseFloat(decimal));

// Number
// Aritmatics Operation
let usiaA = 40;
let usiaB = 20;

console.log('Penjumlahan', usiaA + usiaB);
console.log('Pengurangan', usiaA - usiaB);
console.log('Perkalian', usiaA * usiaB);
console.log('Pembagian', usiaA / usiaB);
console.log('Modulus', usiaA % usiaB);
console.log(usiaA ** usiaB);

usiaA++;
++usiaA;
// usiaA+=;
console.log(usiaA);

console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.pow(10, 2));
console.log(Math.sqrt(64)); // akar kuadrat
console.log(Math.cbrt(512)); // akar pangkat 3

console.log(Math.round(4.7));
console.log(Math.round(4.3));
console.log(Math.floor(4.2));
console.log(Math.ceil(4.2));

let waktu = new Date();

console.log(waktu.getHours());
console.log(typeof waktu.getMinutes());
