const db = require('../database');

module.exports = {
  register: (req, res) => {
    // console.log('GET DATA REQUEST REGISTER :', req.body);
    let sqlInsert = `INSERT INTO tbusers SET ?`;

    db.query(sqlInsert, req.body, (err, results) => {
      if (err) res.status(500).send(err);
      // console.log(results);
      res.status(200).send(results);
    });
  },
  login: (req, res) => {
    // console.log(req.query);
    let sqlGet = `SELECT * 
                        FROM tbusers 
                        WHERE username = ${db.escape(req.query.username)} 
                        AND password = ${db.escape(req.query.password)} `;
    db.query(sqlGet, (err, results) => {
      if (err) res.status(500).send(err);
      // console.log(results);
      res
        .status(200)
        .send({ dataLogin: results[0], messages: 'Login Success' });
    });
  },
  keepLogin: (req, res) => {
    // console.log('GET ID', req.params.id == 'null');
    let sqlGet = `SELECT * 
                        FROM tbusers 
                        WHERE iduser = ${req.params.id}`;
    if (req.params.id != 'null') {
      db.query(sqlGet, (err, results) => {
        if (err) res.status(500).send(err);
        // console.log('GET RESULTS KEEP LOGIN :', results);
        res.status(200).send(results[0]);
      });
    }
  },
  addToCart: (req, res) => {
    let sqlInsert = `INSERT INTO tbcart SET ?`;
    // console.log(req.body.cart);

    db.query(sqlInsert, req.body.cart, (err, results) => {
      if (err) res.status(500).send(err);
      res.status(200).send(results);
    });
  },
  getCart: (req, res) => {
    let sqlGet = `select c.idcart, st.idstock, st.idsize, p.idproduct, p.name, p.category, 
                    sz.size, c.qty, p.price from tbproducts p
                    join tbcart c 
                    on p.idproduct = c.idproduct
                    join tbstock st
                    on c.idstock = st.idstock
                    join tbsize sz
                    on sz.idsize = st.idsize
                    where c.iduser = ${req.params.iduser};`;

    let sqlGetImage = `SELECT * FROM tbpreview`;

    db.query(sqlGet, (err, results) => {
      if (err) res.status(500).send(err);

      db.query(sqlGetImage, (err2, results2) => {
        if (err2) res.status(500).send(err2);

        results.forEach((element, idx) => {
          results2.forEach((item, index) => {
            if (element.idproduct == item.idproduct) {
              results[idx].image = item.image;
            }
          });
        });
        // console.log(results);
        res.status(200).send(results);
      });
    });
  },
  getProfile: (req, res) => {
    let sqlGetProfile = `SELECT * 
                        FROM tbusers 
                        WHERE iduser = ${req.params.id}`;
    // console.log('GET PROFILE');
  },
  updateQtyInCart: (req, res) => {
    // console.log(req.body.qty);
    let sqlUpdate = `UPDATE tbcart
                     SET qty = ${req.body.qty}
                     WHERE idcart=${req.params.idcart}`;

    db.query(sqlUpdate, (err, results) => {
      if (err) res.status(500).send(err);
      // console.log(results);
      res.status(200).send(results);
    });
  },
  deleteCart: (req, res) => {
    // console.log(req.body.qty);
    let sqlDelete = `DELETE FROM tbcart
                     WHERE idcart=${req.params.idcart}`;

    db.query(sqlDelete, (err, results) => {
      if (err) res.status(500).send(err);
      // console.log(results);
      res.status(200).send(results);
    });
  },
};
