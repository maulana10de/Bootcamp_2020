const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const PORT = 4000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get('/halo', (req, res) => {
  res.status(200).send('<h1>Ini Halo</h1>');
});

app.get('/data', (req, res) => {
  let data = {
    username: 'ade',
    email: 'ade@mail.com',
  };
  res.status(200).send(data);
});

app.get('/buah', (req, res) => {
  let buah = {
    nama: 'Apel',
    harga: 7000,
  };
  res.status(200).send(buah);
});

// request body hanya untuk method put, patch, post
app.post('/body', (req, res) => {
  console.log(req.body);
});

app.post('/input', (req, res) => {
  console.log(req.body);
  let body = [];
  let obj = req.body;
  body.push(obj);
  let fileData = JSON.parse(fs.readFileSync('data.json').toString());

  fileData.push(obj);

  fs.writeFileSync('data.json', JSON.stringify(fileData));
});

app.listen(PORT, () => console.log(`running in port ${PORT}`));
