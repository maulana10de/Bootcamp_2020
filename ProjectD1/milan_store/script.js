let dbProduct = [
  {
    name: 'BLACK TRAINING JERSEY 2019/20',
    desc:
      '100% polyester. Short sleeve with crew neckline training jersey with sponsor to center front. AC Milan and Puma logos.',
    price: 2500000,
    qty: 5,
    image: './images/jersey.jpg',
  },
  {
    name: 'FLIP-FLOP AC MILAN',
    desc:
      'Flip-Flops with EVA sole. The flip-flops up to the number 27 are provided with elastic on the back.',
    price: 200000,
    qty: 5,
    image: './images/canvas.png',
  },
  {
    name: 'AC MILAN BLACK SHORT SOCKS',
    desc: '80% cotton, 18% polyammide, 2% elastane.',
    price: 70000,
    qty: 5,
    image: './images/mi17585.jpg',
  },
];

class DB_Product {
  constructor(_name, _desc, _price, _qty, _image) {
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.qty = _qty;
    this.image = _image;
  }
}

btSubmit = () => {
  dbProduct.push(
    new DB_Product(
      document.getElementById('form').elements[0].value,
      document.getElementById('form').elements[1].value,
      document.getElementById('form').elements[2].value,
      document.getElementById('form').elements[3].value,
      document.getElementById('form').elements[4].value
    )
  );
  printData();
};

printData = (idx, data = dbProduct) => {
  let print = '';
  data.forEach((item, i) => {
    if (i == idx) {
      print += `
        <tr>
          <td>${i + 1}</td>
          <td><input type="text" name="updateName" id="updateName" value="${
            item.name
          }"/></td>
          <td><input type="text" name="updateDesc" id="updateDesc" value="${
            item.desc
          }"/></td>
          <td><input type="number" name="updatePrice" id="updatePrice" value="${
            item.price
          }"/></td>
          <td><input type="text" name="updateQty" id="updateQty" value="${
            item.qty
          }"/></td>
          <td><input type="text" name="updateImage" id="updateImage" value="${
            item.image
          }"/></td>
          <td style="text-align: center">
            <button type='button' onclick='btSave(${i})'>Save</button>
            <button type='button' onclick='btCancel()'>Cancel</button>
          </td>
        </tr>
      `;
    } else {
      print += `
      <tr>
          <td>${i + 1}</td>
          <td>${item.name}</td>
          <td>${item.desc}</td>
          <td>${item.price}</td>
          <td>${item.qty}</td>
          <td><image src="${item.image}" width="30%"></image></td>
          <td>
            <button type='button' onclick='btEdit(${i})'>Edit</button>
            <button type='button' onclick='btDelete(${i})'>Delete</button>
          </td>
      </tr>
      `;
    }
  });
  document.getElementById('tbDataProduct').innerHTML = print;
};

// delete data
btDelete = (i) => {
  dbProduct.splice(i, 1);
  printData();
};

// edit data
btEdit = (i) => {
  printData(i);
};

// save data after edit
btSave = (i) => {
  dbProduct[i].name = document.getElementById('updateName').value;
  dbProduct[i].desc = document.getElementById('updateDesc').value;
  dbProduct[i].price = document.getElementById('updatePrice').value;
  dbProduct[i].qty = document.getElementById('updateQty').value;
  dbProduct[i].image = document.getElementById('updateImage').value;
  printData();
};

// cancel data
btCancel = () => {
  printData();
};

btSearch = () => {
  let inSearch = document.getElementById('inSearch').value;
  let filterAll = dbProduct.filter((item) => {
    return item.name.toLowerCase().includes(inSearch.toLowerCase());
  });
  printData(null, filterAll);
};

btReset = () => {
  printData();
};

btSortBy = () => {
  let option = document.getElementById('sortBy').value;
  console.log(option);
  let sortBy = dbProduct.sort((a, b) => {
    if (option == 'defValue') {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    } else if (option == 'minPrice') {
      return a.price - b.price;
    } else if (option == 'maxPrice') {
      return b.price - a.price;
    }
  });
  printData(null, sortBy);
};

btSearchPrice = () => {
  let inMin = document.getElementById('inMinPrice').value;
  let inMax = document.getElementById('inMaxPrice').value;

  let filterPrice = dbProduct.filter((item) => {
    return item.price >= inMin && item.price <= inMax;
  });

  printData(null, filterPrice);
};
