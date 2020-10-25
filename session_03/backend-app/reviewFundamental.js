// DATA TYPE : STRING, INT/FLOAT(NUMBER), BOOLEAN(TRUE/FALSE), ARRAY(SEKUMPULAN DATA INDEX), OBEJCT, UNDEFINED, NULL

// String
let name = 'Abdi';

// Number
let usia = 20;

// Boolean
let jomblo = true;

// Array
let barang = ['Pakaian', 'Jacket', 'Celana', 'Sepatu'];

let anggota = ['Andi', 'Budi', 'Bima'];
let arrManipulation = (anggota, imbuh = ` Sekolah`) => {
  for (let i = 0; i < anggota.length; i++) {
    anggota[i] += ` ${imbuh}`;
  }
  return anggota;
};

console.log(arrManipulation(anggota, 'Sekolah'));
