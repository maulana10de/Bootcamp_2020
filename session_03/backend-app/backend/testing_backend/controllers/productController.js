const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./db/products.json').toString());

module.exports = {
  getProducts: (req, res) => {
    res.status(200).send(data);
  },
  getProductById: (req, res) => {
    let detail = data.filter((e) => e.id == req.query.id);
    res.status(200).send(detail);
  },
  deleteProductById: (req, res) => {
    let idx = data.findIndex((e) => e.id == req.params.id);
    data.splice(idx, 1);
    fs.writeFileSync('./db/products.json', JSON.stringify(data));
    res.status(200).send(data);
  },
  editProduct: (req, res) => {
    let idx = data.findIndex((e) => e.id == req.params.id);

    console.log(data[idx]);
    console.log('GET REQ BODY', req.body);

    // looping by object
    for (let property in data[idx]) {
      for (let item in req.body) {
        if (item == property) {
          data[idx][property] = req.body[item];
        }
      }
    }
    fs.writeFileSync('./db/products.json', JSON.stringify(data));
    res.status(200).send(data);
  },
  updateStockById: (req, res) => {
    console.log('UPDATE STOCK', req.params, req.body);
    // let idx = data.findIndex((e) => e.id == req.params.id);
    // data[idx] = req.body;
    // fs.writeFileSync('./db/products.json', JSON.stringify(data));
    // res.status(200).send(data);
  },
};
