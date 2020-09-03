/*
1. limit range 5 karakter
2. karakter tetap 5 karakter
3. output berupa list generate kata sesuai denga berapa banyak yang diinputkan user
4. output tidak boleh ada yang sama, harus ada pengecekan setiap generate 
*/
function randomWord() {
  const kata = '%^A4$'.split('');
  let text = '';
  let arrText = [];
  let list = '';
  for (let i = 0; i < 1; i++) {
    kata.map(() => (text += kata[Math.floor(Math.random() * kata.length)]));
    let cutText = text.substr(i * 5, 5);
    cutText = arrText.push(cutText);
  }
  // membuat list text
  // arrText.map((item, i) => {
  //   list += `${i + 1}. ${item}\n`;
  // });

  return arrText.toString();
}

console.log(randomWord());
