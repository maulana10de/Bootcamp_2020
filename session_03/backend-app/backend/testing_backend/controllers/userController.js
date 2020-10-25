const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./db/users.json').toString());

module.exports = {
  getUsers: (req, res) => {
    res.status(200).send(data);
  },
  refreshCart: (req, res) => {
    console.log('REFRESH CART ==>', req.params, req.body.cart);
    let idx = data.findIndex((e) => e.id == req.params.id);
    // console.log('GET IDX ==> ', data[idx]);
    data[idx].cart = req.body.cart;
    // console.log('GET CART ==> ', data[idx].cart);
    fs.writeFileSync('./db/users.json', JSON.stringify(data));
    res.status(200).send(data[idx]);
  },
  getLogin: (req, res) => {
    let dataUsers = req.query.data.includes('@') ? 'email' : 'username';
    let getData = data.filter(
      (e) => e[dataUsers] == req.query.data && e.password == req.query.password
    );
    if (getData.length > 0) {
      res.status(200).send({ messages: 'Login Success', dataLogin: getData });
    } else {
      res.status(204).send({ messages: 'Account Not Exist' });
    }
  },
  getKeepLogin: (req, res) => {
    let getDataKeepLogin = data.filter((e) => e.id == req.params.id);
    if (getDataKeepLogin.length > 0) {
      res.status(200).send(getDataKeepLogin[0]);
    }
  },
  addToCart: (req, res) => {
    // console.log(req.params);
    // console.log('REQ BODY', req.body.cart);
    let idx = data.findIndex((e) => e.id == req.params.id);
    // console.log('GET IDX ==> ', idx);
    data[idx].cart = req.body.cart;
    // console.log('GET CART ==> ', data[idx].cart);
    fs.writeFileSync('./db/users.json', JSON.stringify(data));
    res.status(200).send(data);
  },
};
