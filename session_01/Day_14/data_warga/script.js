// https://image.freepik.com/free-photo/isolated-shot-stunned-attractive-female-indicates-new-t-shirt-being-surprised-with-high-price-clothes-shopping-mall-poses-against-pink-studio_273609-3857.jpg
// https://image.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg

let dbWarga = [];

addData = () => {
  document.getElementById('email').classList.remove('email');
  let firstName = document.getElementById('form').elements[0].value;
  let lastName = document.getElementById('form').elements[1].value;
  let phone = document.getElementById('form').elements[2].value;
  let email = document.getElementById('form').elements[3].value;
  let gender = document.getElementById('form').elements['gender'].value;
  let job = document.getElementById('form').elements[6].value;
  let photo = document.getElementById('form').elements[7].value;
  let address = document.getElementById('form').elements[8].value;

  if (email.includes('@')) {
    dbWarga.push({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      gender: gender,
      job: job,
      photo: photo,
      address: address,
    });
    printData();
    resetForm();
  } else {
    alert('Silahkan masukan email yang benar');
    document.getElementById('email').classList.add('email');
  }
};

printData = (idx, data = dbWarga) => {
  let print = '';
  data.forEach((item, i) => {
    if (i == idx) {
      print += `
        <tr>
          <td>${i + 1}</td>
          <td style="text-align: center" id="photoId${i}">
            <input type="text" name="updatePhoto" id="updatePhoto" value="${
              item[i].photo
            }"/></td>
          <td id="nameId${i}">
            <input type="text" name="updateFirstName" id="updateFirstName" value="${
              item[i].firstName
            }"/>
            <input type="text" name="updateLastName" id="updateLastName" value="${
              item[i].lastName
            }"/>
          </td>
          <td id="phoneId${i}"><input type="text" name="updatePhone" id="updatePhone" value="${
        item[i].phone
      }"/></td>
          <td id="emailId${i}">
            <input type="text" name="updateEmail" id="updateEmail" value="${
              item[i].email
            }"/>
          </td>
          <td id="genderId${i}">
            <input style="display: inline; margin-right: 5px;" type="radio" name="updateGender" id="updateMale" value="Male" ${
              item[i].gender === 'Male' ? 'checked' : false
            }/>
            <label for="male">Male</label><br/>
            <input style="display: inline;margin-right: 5px;" type="radio" name="updateGender" id="updateFemale" value="Female" ${
              item[i].gender === 'Female' ? 'checked' : false
            }/>
            <label for="female">Female</label>
          </td>
          <td id="jobId${i}">
          <select id="updateJob" name="updateJob">
          <option value="Doctor" ${
            item[i].job === 'Doctor' ? 'selected' : false
          }>Doctor</option>
          <option value="Police" ${
            item[i].job === 'Police' ? 'selected' : false
          }>Police</option>
          <option value="Teacher" ${
            item[i].job === 'Teacher' ? 'selected' : false
          }>Teacher</option>
        </select>
          </td>
          <td id="addressId${i}">
            <textarea name="updateAddress" id="updateAddress" rows="5" cols="30" value=""/>${
              item[i].address
            }</textarea>
          </td>
          <td id="actionId${i}"style="text-align: center">
            <button type='button' onclick='updateData(${i})'>Update</button>
            <button type='button' onclick='cancelData()'>Cancel</button>
          </td>
        </tr>
      `;
    } else {
      print += `
      <tr>
          <td>${i + 1}</td>
          <td style="text-align: center" id="photoId${i}">
          <img src="${item.photo}" width="120px"/>
          </td>
          <td id="nameId${i}">${item.firstName} ${item.lastName}</td>
          <td id="phoneId${i}">${item.phone}</td>
          <td id="emailId${i}">${item.email}</td>
          <td id="genderId${i}">${item.gender}</td>
          <td id="jobId${i}">${item.job}</td>
          <td id="addressId${i}">${item.address}</td>
          <td id="actionId${i}"style="text-align: center">
            <button type='button' onclick='editData(${i})'>Edit</button>
            <button type='button' onclick='deleteData(${i})'>Delete</button>
          </td>
      </tr>
      `;
    }
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
  form.elements[6].value = '';
  form.elements[7].value = '';
  form.elements[8].value = '';
};

// edit data
editData = (i) => {
  printData(i);
  // document.getElementById(`photoId${i}`).innerHTML = `
  //   <input type="text" name="updatePhoto" id="updatePhoto" value="${dbWarga[i].photo}"/>`;
  // document.getElementById(`nameId${i}`).innerHTML = `
  //   <input type="text" name="updateFirstName" id="updateFirstName" value="${dbWarga[i].firstName}"/>
  //   <input type="text" name="updateLastName" id="updateLastName" value="${dbWarga[i].lastName}"/>`;
  // document.getElementById(`phoneId${i}`).innerHTML = `
  //   <input type="text" name="updatePhone" id="updatePhone" value="${dbWarga[i].phone}"/>`;
  // document.getElementById(`emailId${i}`).innerHTML = `
  //   <input type="text" name="updateEmail" id="updateEmail" value="${dbWarga[i].email}"/>`;
  // document.getElementById(`genderId${i}`).innerHTML = `
  //   <input style="display: inline; margin-right: 5px;" type="radio" name="updateGender" id="updateMale" value="Male" ${
  //     dbWarga[i].gender === 'Male' ? 'checked' : false
  //   }/>
  //   <label for="male">Male</label><br/>
  //   <input style="display: inline;margin-right: 5px;" type="radio" name="updateGender" id="updateFemale" value="Female" ${
  //     dbWarga[i].gender === 'Female' ? 'checked' : false
  //   }/>
  //   <label for="female">Female</label>`;
  // document.getElementById(`jobId${i}`).innerHTML = `
  //   <select id="updateJob" name="updateJob">
  //     <option value="Doctor" ${
  //       dbWarga[i].job === 'Doctor' ? 'selected' : false
  //     }>Doctor</option>
  //     <option value="Police" ${
  //       dbWarga[i].job === 'Police' ? 'selected' : false
  //     }>Police</option>
  //     <option value="Teacher" ${
  //       dbWarga[i].job === 'Teacher' ? 'selected' : false
  //     }>Teacher</option>
  //   </select>`;
  // document.getElementById(`addressId${i}`).innerHTML = `
  //   <textarea name="updateAddress" id="updateAddress" rows="5" cols="30" value=""/>${dbWarga[i].address}
  //   </textarea>`;
  // document.getElementById(`actionId${i}`).innerHTML = `
  //   <button type='button' onclick='updateData(${i})'>Update</button>
  //   <button type='button' onclick='cancelData()'>Cancel</button>`;
};

// update data
updateData = (i) => {
  dbWarga[i].photo = document.getElementById('updatePhoto').value;
  dbWarga[i].firstName = document.getElementById('updateFirstName').value;
  dbWarga[i].lastName = document.getElementById('updateLastName').value;
  dbWarga[i].phone = document.getElementById('updatePhone').value;
  dbWarga[i].email = document.getElementById('updateEmail').value;
  document.getElementById('updateMale').checked
    ? (dbWarga[i].gender = document.getElementById('updateMale').value)
    : (dbWarga[i].gender = document.getElementById('updateFemale').value);
  dbWarga[i].job = document.getElementById('updateJob').value;
  dbWarga[i].address = document.getElementById('updateAddress').value;
  printData();
};

// cancel data
cancelData = () => {
  printData();
};

searchName = () => {
  let inSearch = document.getElementById('search').value;
  console.log(inSearch);
};
