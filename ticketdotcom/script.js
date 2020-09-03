// data user
let dbUser = [
  {
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin',
    keranjang: [],
  },
  {
    username: 'ado',
    email: 'ade@gmail.com',
    password: 'ado123',
    role: 'user',
    keranjang: [],
  },
  {
    username: 'adi',
    email: 'adi@gmail.com',
    password: 'adi123',
    role: 'user',
    keranjang: [],
  },
];

let dbProduk = [
  {
    idProduk: 1,
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
    idProduk: 2,
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
    idProduk: 3,
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
    idProduk: 4,
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
  {
    idProduk: 5,
    airlineLogo:
      'https://static.tiket.photos/image/upload/v1535614929/string/2018/08/30/49e042b5-678f-494e-b5d9-cf44c995749d49e436f1e3a69001e841c131152203b9.png',
    airlineName: 'Citilink',
    arrival: 'Semarang',
    arrivalTime: '23:00',
    date: '2020-09-20',
    departure: 'Bali',
    departureTime: '20:00',
    price: 1700000,
    seatAvailable: 75,
  },
];

let dbKeranjang = [];

// display homepage
document.getElementById('regis-page').style.display = 'none';
document.getElementById('login-page').style.display = 'none';
document.getElementById('list-produk').style.display = 'none';
document.getElementById('addProduct-page').style.display = 'none';
document.getElementById('cart-page').style.display = 'none';
document.getElementById('bt-logout').style.display = 'none';

// variabel global
let userLogin = null;
let totalBayar;

document.getElementById('bt-logout').disabled = true;

// class user
class DB_User {
  constructor(_username, _email, _password) {
    this.username = _username;
    this.email = _email;
    this.password = _password;
    this.role = 'user';
    this.keranjang = [];
  }
}

// class product
class DB_Produk {
  constructor(
    _idProduk,
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
    this.idProduk = _idProduk;
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

class DB_Keranjang {
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

// method display
btMenu = (menu) => {
  if (menu == 'regis') {
    document.getElementById('regis-page').style.display = 'block';
    document.getElementById('login-page').style.display = 'none';
  } else if (menu == 'login') {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('regis-page').style.display = 'none';
  }
};

// method
btRegis = () => {
  let formRegis = document.getElementById('formRegister');
  // validasi form
  if (
    formRegis.elements[0].value == '' ||
    formRegis.elements[1].value == '' ||
    formRegis.elements[2].value == ''
  ) {
    alert('Form tidak boleh kosong');
  } else if (!formRegis.elements[1].value.includes('@')) {
    alert('Format email masih salah');
  } else if (formRegis.elements[2].value.length < 8) {
    alert('Password tidak boleh kurang dari 8 karakter');
  } else {
    if (
      !dbUser.some(
        (item) => item.username == formRegis.elements[0].value.toLowerCase()
      )
    ) {
      dbUser.push(
        new DB_User(
          formRegis.elements[0].value,
          formRegis.elements[1].value,
          formRegis.elements[2].value
        )
      );
      alert('Selamat, Anda berhasil mendaftar!! ');
    } else {
      alert(
        `Maaf, untuk username ${formRegis.elements[0].value} sudah dipakai`
      );
    }
  }
};

btLogin = () => {
  let getUsername = document.getElementById('loginName').value;
  let getPassword = document.getElementById('loginPass').value;

  if (getUsername == '' || getPassword == '') {
    alert('Form tidak boleh kosong');
  } else {
    dbUser.forEach((item, index) => {
      if (item.username == getUsername && item.password == getPassword) {
        userLogin = index;
        alert(`Anda sudah berhasil login!!`);
        document.getElementById('bt-logout').disabled = false;
        document.getElementById('bt-logout').style.display = 'block';
        document.getElementById('bt-login').style.display = 'none';
      }
    });

    if (userLogin !== null) {
      if (dbUser[userLogin].role == 'admin') {
        document.getElementById('list-produk').style.display = 'block';
        document.getElementById('addProduct-page').style.display = 'block';
        printProduk();
      } else if (dbUser[userLogin].role == 'user') {
        document.getElementById('list-produk').style.display = 'block';
        document.getElementById('cart-page').style.display = 'block';
        printProduk();
        printAddToCart();
      }
    } else {
      alert(`Maaf, username anda belum terdaftar!!`);
    }
  }
};

btLogout = () => {
  userLogin = null;
  alert('Anda berhasil logout!!');
  document.getElementById('bt-logout').style.display = 'none';
  document.getElementById('bt-login').style.display = 'block';
  document.getElementById('bt-logout').disabled = true;
  document.getElementById('bt-login').disabled = false;
  document.getElementById('list-produk').style.display = 'none';
  document.getElementById('cart-page').style.display = 'none';
  document.getElementById('addProduct-page').style.display = 'none';
};

//
btTambah = () => {
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
    dbProduk.push(
      new DB_Produk(
        dbProduk.length + 1,
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
    alert('Data berhasil diinput!!');
  }
  printProduk();
};

printProduk = (idx, data = dbProduk) => {
  let tableElement = '';
  data.forEach((item, i) => {
    if (idx == i) {
      tableElement += `
      <tr>
        <td>${i + 1}</td>
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
          <button type="button" onclick="btSave(${i})">Save</button>
          <button type="button" onclick="printProduk()">Cancel</button>
        </td>
      </tr>   
      `;
    } else {
      tableElement += `
      <tr>
        <td>${i + 1}</td>
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
              ? `<button type="button" onclick="btAddToCart(${i})">Add To Cart</button>`
              : `<button type="button" onclick="btEdit(${i})">Edit</button>
                <button type="button" onclick="btDelete(${i})">Delete</button>`
          }
        </td>
      </tr>
          `;
    }
  });
  document.getElementById('listProduk').innerHTML = tableElement;
};

btDelete = (i) => {
  dbProduk.splice(i, 1);
  printProduk();
};

btEdit = (i) => {
  console.log(i);
  printProduk(i);
};

btSave = (i) => {
  dbProduk[i].airlineName = document.getElementById('upAirlineName').value;
  dbProduk[i].airlineLogo = document.getElementById('upAirlineLogo').value;
  dbProduk[i].date = document.getElementById('upDate').value;
  dbProduk[i].departure = document.getElementById('upDeparture').value;
  dbProduk[i].arrival = document.getElementById('upArrival').value;
  dbProduk[i].departureTime = document.getElementById('upDepartureTime').value;
  dbProduk[i].arrivalTime = document.getElementById('upArrivalTime').value;
  dbProduk[i].price = parseInt(document.getElementById('upPrice').value);
  dbProduk[i].seatAvailable = parseInt(
    document.getElementById('upSeatAvailable').value
  );
  printProduk();
};

btCariProduk = () => {
  let inSearch = document.getElementById('cariProduk').value;
  let filterAll = dbProduk.filter((item) => {
    return item.date.includes(inSearch);
  });

  printProduk(null, filterAll);
};

btSearchPrice = () => {
  let inMin = parseInt(document.getElementById('inMinPrice').value);
  let inMax = parseInt(document.getElementById('inMaxPrice').value);

  let filterPrice = dbProduk.filter((item) => {
    return item.price >= inMin && item.price <= inMax;
  });

  printProduk(null, filterPrice);
};

btSearchSeat = () => {
  let inMinS = parseInt(document.getElementById('inMinSeat').value);
  let inMaxS = parseInt(document.getElementById('inMaxSeat').value);

  let filterStock = dbProduk.filter((item) => {
    return item.seatAvailable >= inMinS && item.seatAvailable <= inMaxS;
  });

  printProduk(null, filterStock);
};

btSortBy = () => {
  let option = document.getElementById('sortBy').value;
  let sortBy = dbProduk.sort((a, b) => {
    if (option == 'defaultValue') {
      if (a.airlineName < b.airlineName) return -1;
      if (a.airlineName > b.airlineName) return 1;
      return 0;
    } else if (option == 'minPrice') {
      return a.price - b.price;
    } else if (option == 'maxPrice') {
      return b.price - a.price;
    } else if (option == 'departure') {
      if (a.departure < b.departure) return -1;
      if (a.departure > b.departure) return 1;
      return 0;
    } else if (option == 'arrival') {
      if (a.arrival < b.arrival) return -1;
      if (a.arrival > b.arrival) return 1;
      return 0;
    }
  });
  printProduk(null, sortBy);
};

btResetProduk = () => {
  printProduk();
};

function printAddToCart() {
  let tableElement = '';
  totalBayar = 0;
  dbUser[userLogin].keranjang.forEach((item, i) => {
    tableElement += `
          <tr>
            <td>${i + 1}</td>
            <td><image src="${item.airlineLogo}" width="70px"></image></td>
            <td>${item.date}</td>
            <td>${item.departure}</td>
            <td>${item.arrival}</td>
            <td>${item.departureTime}</td>
            <td>${item.arrivalTime}</td>
            <td>${item.qty}</td>
            <td>IDR ${item.price.toLocaleString()}</td>
            <td>IDR ${item.totalPrice.toLocaleString()}</td>
            <td>
                  <button type="button" onclick="btEditCart(${i})">Edit</button>
                  <button type="button" onclick="btDeleteCart(${i})">Delete</button>
            </td>
          </tr>
        `;
    totalBayar += item.totalPrice;
  });
  document.getElementById('listKeranjang').innerHTML = tableElement;
  document.getElementById('listCheckout').innerHTML = `
    <thead>
      <th>Total Pembayaran</th>
      <th>IDR ${totalBayar.toLocaleString()}</th>
      <th><button onclick="btBayar()">Bayar</button></th>
    </thead>  
  `;
  console.log(dbUser);
}

btAddToCart = (i) => {
  let qty = parseInt(prompt('Masukan jumlah kursi yang ingin dibooking!!'));
  if (qty > dbProduk[i].seatAvailable) {
    alert('Maaf anda melebihi kapasitas kursi yang tersedia!!');
  } else {
    dbProduk[i].seatAvailable -= qty;
    dbUser[userLogin].keranjang.push(
      new DB_Keranjang(
        dbProduk[i].idProduk,
        dbProduk[i].date,
        dbProduk[i].airlineLogo,
        dbProduk[i].airlineName,
        dbProduk[i].departure,
        dbProduk[i].arrival,
        dbProduk[i].departureTime,
        dbProduk[i].arrivalTime,
        qty,
        dbProduk[i].price
      )
    );
  }

  printProduk();
  printAddToCart();
};

btDeleteCart = (i) => {
  let ind = dbProduk.findIndex(
    (item) => item.idProduk == dbUser[userLogin].keranjang[i].id
  );
  dbProduk[ind].seatAvailable += dbUser[userLogin].keranjang[i].qty;
  dbUser[userLogin].keranjang.splice(i, 1);
  printAddToCart();
  printProduk();
};

btEditCart = (i) => {
  let ind = dbProduk.findIndex(
    (item) => item.idProduk == dbUser[userLogin].keranjang[i].id
  );

  dbProduk[ind].seatAvailable += dbUser[userLogin].keranjang[i].qty;
  let inQtyBaru = parseInt(prompt('Masukan jumlah kursi yg dibooking!!'));
  dbUser[userLogin].keranjang[i].qty = inQtyBaru;
  dbProduk[ind].seatAvailable -= inQtyBaru;
  dbUser[userLogin].keranjang[i].totalPrice =
    dbUser[userLogin].keranjang[i].price * inQtyBaru;
  printProduk();
  printAddToCart();
};

btBayar = () => {
  while (true) {
    let bayar = parseInt(prompt('Silahkan bayar:')) - totalBayar;
    if (bayar < 0) {
      alert('Maaf uang anda kurang');
    } else {
      alert(`Kembalian anda IDR ${bayar.toLocaleString()}\nTerima kasih`);
      dbUser[userLogin].keranjang = [];
      totalBayar = 0;
      printAddToCart();
      break;
    }
  }
};
