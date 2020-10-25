const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data.json').toString());

module.exports = {
  getData: (req, res) => {
    res.status(200).send(data);
  },
  postData: (req, res) => {
    data.push(req.body);
    fs.writeFileSync('./data.json', JSON.stringify(data));
    res.status(200).send(data);
  },
  deleteData: (req, res) => {
    let idx = data.findIndex((e) => e.id == req.params.id);
    data.splice(idx, 1);
    fs.writeFileSync('./data.json', JSON.stringify(data));
    res.status(200).send(data);
  },
  updateDataPut: (req, res) => {
    let idx = data.findIndex((e) => e.id == req.query.id);
    data[idx] = req.body;
    fs.writeFileSync('./data.json', JSON.stringify(data));
    res.status(200).send(data);
  },
  updateDataPatch: (req, res) => {
    // mencari index berdasarkan id yang didapat
    let idx = data.findIndex((e) => e.id == req.query.id);

    // looping by object
    for (let proper in data[idx]) {
      for (let value in req.body) {
        if (proper == value) {
          data[idx][proper] = req.body[value];
        }
      }
    }

    fs.writeFileSync('./data.json', JSON.stringify(data));
    res.status(200).send(data);
  },
};
