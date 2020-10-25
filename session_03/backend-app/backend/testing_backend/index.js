const express = require('express');
const cors = require('cors'); // Library yang digunakan untuk izin access terhadap route FE
const bodyParser = require('body-parser'); // Membaca data dari request body

const fs = require('fs'); // untuk memanipulasi file

const app = express();
const PORT = 4000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

const {
  dataRouter,
  userRouter,
  productRouter,
  carouselRouter,
  transactionRouter,
} = require('./routers');

// routes
app.use('/data', dataRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/carousel', carouselRouter);
app.use('/transaction', transactionRouter);

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));

// let data = JSON.parse(fs.readFileSync('data.json').toString()); // output berupa data object javascript

// app.get('/data', (req, res) => {
//   res.status(200).send(data);
// });

// app.post('/data', (req, res) => {
//   console.log(req.body);
//   data.push(req.body);
//   fs.writeFileSync('data.json', JSON.stringify(data));
//   res.status(200).send(data);
// });

// app.delete('/data/:id', (req, res) => {
//   let idx = data.findIndex((e) => e.id == req.params.id);
//   data.splice(idx, 1);
//   fs.writeFileSync('data.json', JSON.stringify(data));
//   res.status(200).send(data);
// });

// app.put('/data', (req, res) => {
//   let idx = data.findIndex((e) => e.id == req.query.id);
//   data[idx] = req.body;
//   fs.writeFileSync('data.json', JSON.stringify(data));
//   res.status(200).send(data);
// });

// app.patch('/data', (req, res) => {
//   // mencari index berdasarkan id yang didapat
//   let idx = data.findIndex((e) => e.id == req.query.id);

//   // looping by object
//   for (let proper in data[idx]) {
//     for (let value in req.body) {
//       if (proper == value) {
//         data[idx][proper] = req.body[value];
//       }
//     }
//   }

//   fs.writeFileSync('data.json', JSON.stringify(data));
//   res.status(200).send(data);
// });
