/*
- Simpan elemen pertama sebagai nilai terkecil
- Bandingkan item tersebut dengan item berikutnya pada array sampai menemukan angka yang lebih kecil
- Jika angka yang lebih kecil ditemukan, tetapkan angka yang lebih kecil itu sebagai minimum baru dan lanjutkan hingga akhir array
- jika minimum bukanlah nilai (indeks) yang Anda gunakan untuk memulai, tukar kedua nilai tersebut
[19, 44, 38, 5, 47, 15]
*/
function selectionSort(arr) {
  // telusuri setiap elem dalam array
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // lowest = 0
    // bandingkan elem pertama dengan selenajutnya
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // jika i bukan yang low
    // console.log(`lowest:${lowest}, i: ${i}`);
    if (i !== lowest) {
      let temp = arr[i]; // temp = 19
      // arr ke i sama dengan arr lowest
      // console.log(temp);
      arr[i] = arr[lowest]; // arr[3] = 5
      // console.log(arr[i]);
      arr[lowest] = temp;
      // console.log(arr[lowest]);
    }
  }
  return arr;
}

console.log(selectionSort([19, 44, 38, 5, 47, 15]));
