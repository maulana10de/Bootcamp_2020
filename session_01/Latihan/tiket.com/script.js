// start display
document.getElementById('register-page').style.display = 'none';
document.getElementById('login-page').style.display = 'none';
document.getElementById('logout').style.display = 'none';

// User Class
class DB_User {
  constructor(_username, _email, _password) {
    this.username = _username;
    this.email = _email;
    this.password = _password;
    this.role = 'user';
    this.cart = [];
  }
}

// database user
let dbUser = [
  {
    username: 'admin',
    email: 'admin@mail.com',
    password: 'admin123',
    role: 'admin',
    cart: [],
  },
  {
    username: 'ade',
    email: 'ade@mail.com',
    password: 'ade123',
    role: 'user',
    cart: [],
  },
  {
    username: 'nanda',
    email: 'nanda@mail.com',
    password: 'nanda123',
    role: 'user',
    cart: [],
  },
];

// Product Class
class DB_Product {
  constructor(
    _idProduct,
    _date,
    _airlineLogo,
    _airlineName,
    _departure,
    _arrival,
    _departureTime,
    _arrivalTime,
    _price,
    _seat
  ) {
    this.idProduct = _idProduct;
    this.date = _date;
    this.airlineLogo = _airlineLogo;
    this.airlineName = _airlineName;
    this.departure = _departure;
    this.arrival = _arrival;
    this.departureTime = _departureTime;
    this.arrivalTime = _arrivalTime;
    this.price = _price;
    this.seatAvailable = _seat;
  }
}

// database Product
let dbProduct = [
  {
    idProduct: 1,
    airlineLogo:
      'https://static.tiket.photos/image/upload/v1534831998/string/2018/08/21/ed396405-de36-47de-bb63-a77ede31b440496ffdd3b1650405cea0fe5d6ca8b5c6.png',
    airlineName: 'Batik Air',
    arrival: 'Semarang',
    arrivalTime: '02:18',
    date: '2020-09-30',
    departure: 'Jakarta',
    departureTime: '21:12',
    price: 500000,
    seatAvailable: 150,
  },
  {
    idProduct: 2,
    airlineLogo:
      'https://static.tiket.photos/image/upload/v1534831998/string/2018/08/21/ed396405-de36-47de-bb63-a77ede31b440496ffdd3b1650405cea0fe5d6ca8b5c6.png',
    airlineName: 'Batik Air',
    arrival: 'Bali',
    arrivalTime: '11:15',
    date: '2020-09-25',
    departure: 'Jakarta',
    departureTime: '08:15',
    price: 720000,
    seatAvailable: 200,
  },
  {
    idProduct: 3,
    airlineLogo:
      'https://static.tiket.photos/image/upload/v1534836616/string/2018/08/21/77df219f-f1d2-494b-a5e7-a339a30e68dd36101a6e250cd0c3b727098ef19b62c6.png',
    airlineName: 'Lion Air',
    arrival: 'Bali',
    arrivalTime: '01:00',
    date: '2020-09-15',
    departure: 'Jakarta',
    departureTime: '21:00',
    price: 900000,
    seatAvailable: 100,
  },
  {
    idProduct: 4,
    airlineLogo:
      'https://static.tiket.photos/image/upload/v1534836616/string/2018/08/21/77df219f-f1d2-494b-a5e7-a339a30e68dd36101a6e250cd0c3b727098ef19b62c6.png',
    airlineName: 'Lion Air',
    arrival: 'Semarang',
    arrivalTime: '01:00',
    date: '2020-09-20',
    departure: 'Jakarta',
    departureTime: '21:00',
    price: 1000000,
    seatAvailable: 150,
  },
];

class DB_Cart {
  constructor(
    _id,
    _date,
    _airlineLogo,
    _airlineName,
    _departure,
    _arrival,
    _departureTime,
    _arrivalTime,
    _qty,
    _price
  ) {
    this.id = _id;
    this.date = _date;
    this.airlineLogo = _airlineLogo;
    this.airlineName = _airlineName;
    this.departure = _departure;
    this.arrival = _arrival;
    this.departureTime = _departureTime;
    this.arrivalTime = _arrivalTime;
    this.qty = _qty;
    this.price = _price;
    this.totalPrice = _qty * _price;
  }
}

// db keranjang
// let dbCart = [];

// Global Variabel
userLogin = null;

// display menu
btMenu = (menu) => {
  if (menu == 'register') {
    document.getElementById('register-page').style.display = 'block';
    document.getElementById('login-page').style.display = 'none';
  } else if (menu == 'login') {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('register-page').style.display = 'none';
  }
};

// register user
btRegister = () => {
  let dataFormRegister = document.getElementById('dataFormRegister');
  let usernameValidasi = dbUser.some(
    (item) => item.username == dataFormRegister.elements[0].value.toLowerCase()
  );

  if (
    dataFormRegister.elements[0].value == '' ||
    dataFormRegister.elements[1].value == '' ||
    dataFormRegister.elements[2].value == ''
  ) {
    alert('Form tidak boleh kosong');
  } else if (!dataFormRegister.elements[1].value.includes('@')) {
    alert('Format email salah');
  } else if (dataFormRegister.elements[2].length < 8) {
    alert('Password tidak boleh kurang dari 8 karakter');
  } else if (usernameValidasi) {
    alert('username sudah terdaftar');
  } else {
    // push to database
    dbUser.push(
      new DB_User(
        dataFormRegister.elements[0].value,
        dataFormRegister.elements[1].value,
        dataFormRegister.elements[2].value
      )
    );
    alert('Selamat anda sudah terdaftar');
  }
  console.log(dbUser);
};

// login user
btLogin = () => {
  let getUserName = document.getElementById('inUsernameLogin').value;
  let getPassword = document.getElementById('inPasswordLogin').value;

  if (getUserName == '' || getPassword == '') {
    alert('Username & Password tidak boleh kosong');
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
  } else {
    dbUser.forEach((item, idx) => {
      if (getUserName == item.username && getPassword == item.password) {
        userLogin = idx;
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
      }
    });

    if (userLogin !== null) {
      if (dbUser[userLogin].role == 'admin') {
        alert(`Kamu adalah Admin`);
        printDataProduct();
      } else if (dbUser[userLogin].role == 'user') {
        alert(`And berhasil login`);
        printDataProduct();
        printDataAddToCart();
      }
    } else {
      alert(`Akun anda belum terdaftar`);
    }
  }
};

// logout user
btLogout = () => {
  userLogin = null;
  alert('Anda sudah logout');
  document.getElementById('login').style.display = 'block';
  document.getElementById('logout').style.display = 'none';

  // document.getElementById('list-product').style.display = 'none';
  // document.getElementById('form-product').style.display = 'none';
  // document.getElementById('login-page').style.display = 'none';
};

// add product to database
btSubmitAddProduct = () => {
  let getDate = document.getElementById('dataFormProduct').elements[0].value;
  let getAirlineLogo = document.getElementById('dataFormProduct').elements[1]
    .value;
  let getAirlineName = document.getElementById('dataFormProduct').elements[2]
    .value;
  let getDeparture = document.getElementById('dataFormProduct').elements[3]
    .value;
  let getArrival = document.getElementById('dataFormProduct').elements[4].value;
  let getDepartureTime = document.getElementById('dataFormProduct').elements[5]
    .value;
  let getArrivalTime = document.getElementById('dataFormProduct').elements[6]
    .value;
  let getPrice = parseInt(
    document.getElementById('dataFormProduct').elements[7].value
  );
  let getSeatAvailable = parseInt(
    document.getElementById('dataFormProduct').elements[8].value
  );

  if (
    getDate == '' ||
    getAirlineLogo == '' ||
    getAirlineName == '' ||
    getDeparture == '' ||
    getArrival == '' ||
    getDepartureTime == '' ||
    getArrivalTime == '' ||
    getPrice == '' ||
    getSeatAvailable == ''
  ) {
    alert('form tidak boleh kosong');
  } else {
    dbProduct.push(
      new DB_Product(
        dbProduct.length + 1,
        getDate,
        getAirlineLogo,
        getAirlineName,
        getDeparture,
        getArrival,
        getDepartureTime,
        getArrivalTime,
        getPrice,
        getSeatAvailable
      )
    );
    alert('Data berhasil diinput');
  }

  printDataProduct();
  console.log(dbProduct);
};

// print data
printDataProduct = (i, data = dbProduct) => {
  // document.getElementById('tblProductList').style.display = 'block';
  let tableElement = '';
  data.forEach((item, idx) => {
    if (i == idx) {
      tableElement += `
      <tr>
        <td>${idx + 1}</td>
        <td>
          <input type="text" name="updateAirlineName" id="upAirlineName" value="${
            item.airlineName
          }"/>
          <input type="text" name="updateAirlineLogo" id="upAirlineLogo" value="${
            item.airlineLogo
          }"/>
        </td>
        <td>
          <input type="date" name="updateDate" id="upDate" value="${
            item.date
          }"/>
        </td>
        <td>
          <input type="text" name="updateDeparture" id="upDeparture" value="${
            item.departure
          }"/>
        </td>
        <td>
          <input type="text" name="updateArrival" id="upArrival" value="${
            item.arrival
          }"/>
        </td>
        <td>
          <input type="time" name="updateDepartureTime" id="upDepartureTime" value="${
            item.departureTime
          }"/>
        </td>
        <td>
          <input type="time" name="updateArrivalTime" id="upArrivalTime" value="${
            item.arrivalTime
          }"/>
        </td>
        <td>
          <input type="number" name="updatePrice" id="upPrice" value="${
            item.price
          }"/>
        </td>
        <td>
          <input type="number" name="updateSeatAvailable" id="upSeatAvailable" value="${
            item.seatAvailable
          }"/>
        </td>
        <td>
          <button type="button" onclick="btSaveProduct(${idx})">Save</button>
          <button type="button" onclick="printDataProduct()">Cancel</button>
        </td>
      </tr>
      `;
    } else {
      tableElement += `
      <tr>
        <td>${idx + 1}</td>
        <td><image src="${item.airlineLogo}" width="70px"></image></td>
        <td>${item.date}</td>
        <td>${item.departure}</td>
        <td>${item.arrival}</td>
        <td>${item.departureTime}</td>
        <td>${item.arrivalTime}</td>
        <td>IDR ${item.price.toLocaleString()}</td>
        <td>${item.seatAvailable}</td>
        <td>
          ${
            dbUser[userLogin].role == 'user'
              ? `<button type="button" onclick="btAddToCart(${idx})">Add To Cart</button>`
              : `<button type="button" onclick="btEditProduct(${idx})">Edit</button>
                <button type="button" onclick="btDeleteProduct(${idx})">Delete</button>`
          }
        </td>
      </tr>
    `;
    }
  });

  document.getElementById('tbListProduct').innerHTML = tableElement;
};

// delete data product
btDeleteProduct = (idx) => {
  if (confirm('Anda yakin ingin menghapus item ini?') == true) {
    dbProduct.splice(idx, 1);
  }
  printDataProduct();
};

// edit data product
btEditProduct = (idx) => {
  printDataProduct(idx);
};

// save data product
btSaveProduct = (idx) => {
  dbProduct[idx].airlineName = document.getElementById('upAirlineName').value;
  dbProduct[idx].airlineLogo = document.getElementById('upAirlineLogo').value;
  dbProduct[idx].date = document.getElementById('upDate').value;
  dbProduct[idx].departure = document.getElementById('upDeparture').value;
  dbProduct[idx].arrival = document.getElementById('upArrival').value;
  dbProduct[idx].departureTime = document.getElementById(
    'upDepartureTime'
  ).value;
  dbProduct[idx].arrivalTime = document.getElementById('upArrivalTime').value;
  dbProduct[idx].price = parseInt(document.getElementById('upPrice').value);
  dbProduct[idx].seatAvailable = parseInt(
    document.getElementById('upSeatAvailable').value
  );
  printDataProduct();
};

// cari berdasarkan tanggal
btSearchByDate = () => {
  let searchByDate = dbProduct.filter((item) =>
    return item.date.includes(document.getElementById('getSearchDate').value)
  );
  printDataProduct(null, searchByDate);
};

// btSearchByDate = () => {
//   let inSearch = document.getElementById('getSearchDate').value;
//   let filterAll = dbProduk.filter((item) => {
//     return item.nama.toLowerCase().includes(inSearch.toLowerCase());
//   });

//   // console.log(filterAll);
//   printProduk(null, filterAll);
// };

btAddToCart = (i) => {
  let qty = parseInt(prompt('Berapa jumlah kursi yang dibooking?'));
  dbProduct[i].seatAvailable -= qty;

  dbUser[userLogin].cart.push(
    new DB_Cart(
      dbProduct[i].idProduct,
      dbProduct[i].date,
      dbProduct[i].airlineLogo,
      dbProduct[i].airlineName,
      dbProduct[i].departure,
      dbProduct[i].arrival,
      dbProduct[i].departureTime,
      dbProduct[i].arrivalTime,
      qty,
      dbProduct[i].price
    )
  );
  alert('Data berhasil ditambahkan ke keranjang');
  console.table(dbUser);
  // document.getElementById('tblProductList').style.display = 'none';
  printDataProduct();
  printDataAddToCart();
};

printDataAddToCart = () => {
  let tableElement = '';
  dbUser[userLogin].cart.forEach((item, idx) => {
    tableElement += `
      <tr>
        <td>${idx + 1}</td>
        <td><image src="${item.airlineLogo}" width="70px"></image></td>
        <td>${item.date}</td>
        <td>${item.departure}</td>
        <td>${item.arrival}</td>
        <td>${item.departureTime}</td>
        <td>${item.arrivalTime}</td>
        <td>${item.qty}</td>
        <td>IDR ${item.price.toLocaleString()}</td>
        <td>${item.totalPrice.toLocaleString()}</td>
        <td>
              <button type="button" onclick="btEditCart(${idx})">Edit</button>
              <button type="button" onclick="btDeleteCart(${idx})">Delete</button>
        </td>
      </tr>
    `;
  });

  document.getElementById('tbListCart').innerHTML = tableElement;
};
