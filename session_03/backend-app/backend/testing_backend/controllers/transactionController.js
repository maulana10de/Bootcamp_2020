const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./db/transactions.json').toString());

module.exports = {
  getTransactions: (req, res) => {
    res.status(200).send(data);
  },
  addDataTransaction: (req, res) => {
    console.log('GET TRANSACTION', req.body);
    data.push(req.body);
    fs.writeFileSync('./db/transactions.json', JSON.stringify(data));
    res.status(200).send(data);
  },
};
