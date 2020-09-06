// https://image.freepik.com/free-photo/isolated-shot-stunned-attractive-female-indicates-new-t-shirt-being-surprised-with-high-price-clothes-shopping-mall-poses-against-pink-studio_273609-3857.jpg
// https://image.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg

let dbWarga = [];

addData = () => {
  let email = document.getElementById('email');
  let form = document.getElementById('form');

  email.classList.remove('email');
  if (form.elements[3].value.includes('@')) {
    dbWarga.push({
      name: form.elements[0].value,
      age: form.elements[1].value,
      phone: form.elements[2].value,
      email: form.elements[3].value,
    });

    let dbData = JSON.stringify(dbWarga);
    localStorage.setItem('dbWarga', dbData);
    console.log(dbData);

    printData();
    resetForm();
  } else {
    alert('Silahkan masukan email yang benar');
    email.classList.add('email');
  }
};

printData = () => {
  let print = '';
  let dbDataWarga = JSON.parse(localStorage.getItem('dbWarga'));
  dbDataWarga.forEach((item, i) => {
    print += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.phone}</td>
                    <td>${item.email}</td>
                    <td style="text-align: center">
                      <button type='button' onclick='deleteData(${i})'>Delete</button>
                      <button type='button' onclick='editData(${i})'>Edit</button>
                    </td>
                </tr>
                `;
  });
  document.getElementById('tbData').innerHTML = print;
};

// delete data
deleteData = (i) => {
  dbWarga.splice(i, 1);
  printData();
};

// reset form
resetForm = () => {
  form.elements[0].value = '';
  form.elements[1].value = '';
  form.elements[2].value = '';
  form.elements['email'].value = '';
};

// edit data
editData = (i) => {
  // document.getElementById('namaDepan').value = dbWarga[i].namaDepan;
  // document.getElementById('namaBelakang').value = dbWarga[i].namaBelakang;
  // document.getElementById('noHp').value = dbWarga[i].noHp;
  // document.getElementById('email').value = dbWarga[i].email;
  let name = prompt('Name', dbWarga[i].name);
  let age = prompt('Age', dbWarga[i].age);
  let phone = prompt('Phone', dbWarga[i].phone);
  let email = prompt('Email', dbWarga[i].email);
  dbWarga[i].name = name;
  dbWarga[i].age = age;
  dbWarga[i].phone = phone;
  dbWarga[i].email = email;
  printData();
  console.log(dbWarga);
};
