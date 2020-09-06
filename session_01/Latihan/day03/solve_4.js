// Hari ini Kamis, 1 Februari 2018

let date = new Date();

let hari = date.getDay();
let bulan = date.getMonth() + 1;
let tahun = date.getFullYear();

let getHari;
if (hari == 0) {
  gethari = 'Minggu';
} else if (hari == 1) {
  getHari = 'Senin';
} else if (hari == 2) {
  getHari = 'Selasa';
} else if (hari == 3) {
  getHari = 'Rabu';
} else if (hari == 4) {
  getHari = 'Kamis';
} else if (hari == 5) {
  getHari = 'Jumat';
} else {
  getHari = 'Sabtu';
}

if (bulan == 1) {
  bulan = 'Januari';
} else if (bulan == 2) {
  bulan = 'Februari';
} else if (bulan == 3) {
  bulan = 'Maret';
} else if (bulan == 4) {
  bulan = 'April';
} else if (bulan == 5) {
  bulan = 'Mei';
} else if (bulan == 6) {
  bulan = 'Juni';
} else if (bulan == 7) {
  bulan = 'Juli';
} else if (bulan == 8) {
  bulan = 'Agustus';
} else if (bulan == 9) {
  bulan = 'September';
} else if (bulan == 10) {
  bulan = 'Oktober';
} else if (bulan == 11) {
  bulan = 'November';
} else {
  bulan = 'Desember';
}

console.log(`Hari ini ${getHari}, ${hari} ${bulan} ${tahun}`);
