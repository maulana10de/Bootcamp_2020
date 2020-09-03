let iden = [
  { nama: 'Abdi', usia: 23 },
  { nama: 'Ade', usia: 23 },
  { nama: 'Alex', usia: 23 },
  { nama: 'Adnan', usia: 23 },
];

function xText() {
  let result = [];
  for (let i = 0; i < iden.length; i++) {
    let name = iden[i].nama;
    let nameRes = '';
    for (let j = 0; j < name.length; j++) {
      nameRes += name;
    }
    result.push(nameRes);
  }
  return result;
}

console.log(xText());
