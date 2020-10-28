const db = require('../database');

module.exports = {
  postDataToTransaction: (req, res) => {
    console.log('GET DATA  :', req.body);
    let sqlInsert = `INSERT INTO tbtransaction SET ?`;

    db.query(sqlInsert, req.body, (err, results) => {
      if (err) res.status(500).send(err);
      console.log(results);
      //   res.status(200).send(results);
    });
  },
};
