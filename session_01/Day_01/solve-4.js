let today = 985;
let week = 7;
let month = 30;
let year = 360;

let tahun = Math.floor(today / year);
let bulan = Math.floor((today % year) / month);
let minggu = Math.floor(((today % year) - bulan * month) / week);
let hari = today - tahun * year - bulan * month - minggu * week;

console.log(
  tahun + ' Tahun ' + bulan + ' Bulan ' + minggu + ' minggu ' + hari + ' Hari'
);
