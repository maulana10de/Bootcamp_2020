const db = require('../database');

module.exports = {
  register: (req, res) => {
    console.log('GET DATA REQUEST REGISTER :', req.body);
    let sqlInsert = `INSERT INTO tbusers SET ?`;

    db.query(sqlInsert, req.body, (err, results) => {
      if (err) res.status(500).send(err);
      console.log(results);
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
};
