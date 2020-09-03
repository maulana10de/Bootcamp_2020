class Warga {
  constructor(_antrian, _nama, _asal, _tujuan) {
    this.antrian = _antrian;
    this.nama = _nama;
    this.asal = _asal;
    this.tujuan = _tujuan;
  }
}

let semuaWarga = [];
let wargaRapid = [];
let wargaPositif = [];
let wargaNegatif = [];
let wargaMeninggal = [];
let wargaSembuh = [];
let jmlWarga = 0;
let jmlRapid = 0;
let jmlPositif = 0;
let jmlNegatif = 0;
let jmlSembuh = 0;
let jmlMeninggal = 0;

function getData() {
  let form = document.getElementById('form');
  let dataRapid = new Warga(
    randomWord(),
    form.elements[0].value,
    form.elements[1].value,
    form.elements[2].value
  );
  semuaWarga.push(dataRapid);
  jmlWarga += 1;
  printData();
  printDataSummary();
}

function printData() {
  let print = '';
  semuaWarga.forEach((item, i) => {
    print += `
                <tr>
                    <td style="text-align: center">${item.antrian}</td>
                    <td>${item.nama}</td>
                    <td>${item.asal}</td>
                    <td>${item.tujuan}</td>
                    <td style="text-align: center"><button type='button' onclick='toRapid(${i})'>Rapid Test</button></td>
                </tr>
                `;
  });
  document.getElementById('tbData').innerHTML = print;
}

function printDataRapid() {
  let print = '';
  wargaRapid.forEach((item, i) => {
    print += `
                <tr>
                    <td style="text-align: center">${item.antrian}</td>
                    <td>${item.nama}</td>
                    <td>${item.asal}</td>
                    <td>${item.tujuan}</td>
                    <td style="text-align: center; width: 200px">
                    <button style="margin-bottom: 3px"onclick="toPositif(${i})">Positif</button>
                    <button onclick="toNegatif(${i})">Negatif</button>
                    </td>
                </tr>
                `;
  });
  document.getElementById('tbDataRapid').innerHTML = print;
}

function printDataPositif() {
  let print = '';
  wargaPositif.forEach((item, i) => {
    print += `
                <tr>
                    <td style="text-align: center">${item.antrian}</td>
                    <td>${item.nama}</td>
                    <td>${item.asal}</td>
                    <td>${item.tujuan}</td>
                    <td style="text-align: center; width: 200px">
                      <button style="margin-bottom: 3px" onclick="toRecovered(${i})">Sembuh</button>
                      <button onclick="toDied(${i})">Meninggal</button>
                    </td>
                </tr>
                `;
  });
  document.getElementById('tbDataPositif').innerHTML = print;
}

function printDataNegatif() {
  let print = '';
  wargaNegatif.forEach((item, i) => {
    print += `
                <tr>
                    <td style="text-align: center">${item.antrian}</td>
                    <td>${item.nama}</td>
                    <td>${item.asal}</td>
                    <td>${item.tujuan}</td>
                    <td style="text-align: center; width: 200px">
                      <button>Warga Sehat</button>
                    </td>
                </tr>
                `;
  });
  document.getElementById('tbDataNegatif').innerHTML = print;
}

function printDataSembuh() {
  let print = '';
  wargaSembuh.forEach((item, i) => {
    print += `
                <tr>
                    <td style="text-align: center">${item.antrian}</td>
                    <td>${item.nama}</td>
                    <td>${item.asal}</td>
                    <td>${item.tujuan}</td>
                </tr>
                `;
  });
  document.getElementById('tbDataSembuh').innerHTML = print;
}

function printDataMeninggal() {
  let print = '';
  wargaMeninggal.forEach((item, i) => {
    print += `
                <tr>
                    <td style="text-align: center">${item.antrian}</td>
                    <td>${item.nama}</td>
                    <td>${item.asal}</td>
                    <td>${item.tujuan}</td>
                </tr>
                `;
  });
  document.getElementById('tbDataMeninggal').innerHTML = print;
}

function toRapid(i) {
  wargaRapid.push(semuaWarga[i]);
  semuaWarga.splice(i, 1);
  jmlRapid += 1;
  printData();
  printDataRapid();
  printDataSummary();
}

function toPositif(i) {
  wargaPositif.push(wargaRapid[i]);
  wargaRapid.splice(i, 1);
  jmlPositif += 1;
  printDataRapid();
  printDataPositif();
  printDataSummary();
}

function toNegatif(i) {
  wargaNegatif.push(wargaRapid[i]);
  wargaRapid.splice(i, 1);
  jmlNegatif += 1;
  printDataRapid();
  printDataNegatif();
  printDataSummary();
}

function toRecovered(i) {
  wargaSembuh.push(wargaPositif[i]);
  wargaPositif.splice(i, 1);
  jmlSembuh += 1;
  printDataPositif();
  printDataSembuh();
  printDataSummary();
}

function toDied(i) {
  wargaMeninggal.push(wargaPositif[i]);
  wargaPositif.splice(i, 1);
  jmlMeninggal += 1;
  printDataPositif();
  printDataMeninggal();
  printDataSummary();
}

printDataSummary = () => {
  let print = '';
  print += `
                <tr style="text-align: center">
                    <td>${jmlWarga}</td>
                    <td>${jmlRapid}</td>
                    <td>${jmlPositif}</td>
                    <td>${jmlNegatif}</td>
                    <td>${jmlSembuh}</td>
                    <td>${jmlMeninggal}</td>
                </tr>
                `;

  document.getElementById('tbDataSummary').innerHTML = print;
};

// random
randomWord = () => {
  const kata = '1ZA3F'.split('');
  let text = '';
  let arrText = [];
  for (let i = 0; i < 1; i++) {
    kata.map(() => (text += kata[Math.floor(Math.random() * kata.length)]));
    let cutText = text.substr(i * 5, 5);
    cutText = arrText.push(cutText);
  }
  return arrText.toString();
};

localStorage.setItem('name', 'Ade');
