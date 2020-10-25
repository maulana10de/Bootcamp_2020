const http = require('http');
const port = 4000;
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  // console.log('URL', req.headers);
  if (req.url === '/data') {
    let bio = {
      nama: 'Maulana',
      usia: 27,
      email: 'ade@mail.com',
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(bio));
  } else if (req.url === '/users') {
    let users = [
      {
        username: 'admin',
        email: 'admin@mail.com',
        phone: '081287928317',
        password: 'admin',
        cart: [],
        role: 'admin',
        id: 1,
      },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else if (req.url === '/products') {
    let products = [
      {
        id: 1,
        name: 'ADIDAS PERFORMANCE MARQUEE VEGAS',
        category: 'Shoes',
        brand: 'ADIDAS',
        colour: 'legend ink/ftwr white/flash orange',
        description:
          'When it comes to basketball, there is no way around Nike – the brand with the Swoosh belongs to the game like dunks, three-pointers and cross-overs. Whether in the NBA, European leagues or your neighborhood ...',
        price: 5000000,
        stock: 2,
      },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } else if (req.url === '/buah') {
    let dataBuah = fs.readFileSync('buah.json');
    console.log(dataBuah.toString());
    let toObj = JSON.parse(dataBuah.toString());
    console.log(toObj);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(toObj));
  } else if (req.url === '/home') {
    let homePage = fs.readFileSync('home.html', 'utf-8', () =>
      console.log('Homepage Access')
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (req.url === '/profile') {
    let profile = fs.readFileSync('profile.html', 'utf-8', () =>
      console.log('profile Access')
    );
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(profile);
    res.end();
  } else if (req.url === '/input') {
    let body = [];
    let data = '';
    req
      .on('data', (chunck) => {
        // body.push(chunck);
        console.log('Data', chunck.toString());
        data = chunck.toString();
      })
      .on('end', () => {
        console.log('CHECK DATA :', data);
        let obj = JSON.parse(data);
        body.push(obj);

        let fileData = JSON.parse(fs.readFileSync('data.json').toString());

        fileData.push(obj);

        fs.writeFileSync('data.json', JSON.stringify(fileData));

        let name = JSON.parse(data);
        console.log(name);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Nama : ${name}</h1>`);
      });
  } else if (req.url === '/add-buah') {
    let body = [];
    let data = '';
    req
      .on('data', (chunck) => {
        data = chunck.toString();
      })
      .on('end', () => {
        console.log('GET DATA', data);
        let obj = JSON.parse(data);
        body.push(obj);

        let termData = JSON.parse(fs.readFileSync('buah.json').toString());

        termData.push(obj);

        fs.writeFileSync('buah.json', JSON.stringify(termData));
      });
  }
});

server.listen(port, () => console.log('PORT', port));
