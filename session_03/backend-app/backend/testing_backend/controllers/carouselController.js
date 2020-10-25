const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./db/carousel.json').toString());

module.exports = {
  getCarousels: (req, res) => {
    console.log(data);
    res.status(200).send(data);
  },
  deleteCarousel: (req, res) => {
    let idx = data.findIndex((e) => e.id == req.params.id);
    console.log('GET CAROSEUL ID', data[idx]);
    data.splice(idx, 1);
    fs.writeFileSync('./db/carousel.json', JSON.stringify(data));
    res.status(200).send(data);
  },
  editCarousel: (req, res) => {
    let idx = data.findIndex((e) => e.id == req.params.id);

    console.log(data[idx]);
    console.log('GET REQ BODY', req.body);

    for (let property in data[idx]) {
      for (let item in req.body) {
        if (item == property) {
          data[idx][property] = req.body[item];
        }
      }
    }
    fs.writeFileSync('./db/carousel.json', JSON.stringify(data));
    res.status(200).send(data);
  },
  postDataSlide: (req, res) => {
    data.push(req.body);
    fs.writeFileSync('./db/carousel.json', JSON.stringify(data));
    res.status(200).send(data);
  },
};
