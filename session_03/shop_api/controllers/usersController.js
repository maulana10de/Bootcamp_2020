const db = require('../database');

module.exports = {
  getData: (req, res) => {
    let sqlGet = `SELECT * FROM tb_users`;

    db.query(sqlGet, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      console.log(results);
      res.status(200).send(results);
    });
  },
  addUser: (req, res) => {
    let { username, password, email, role, note, usia } = req.body;
    let sqlInsert = `INSERT INTO tb_users (username, password, email, role, note, usia) 
                    VALUES (
                      ${db.escape(username)}, 
                      ${db.escape(password)}, 
                      ${db.escape(email)}, 
                      ${db.escape(role)}, 
                      ${db.escape(note)}, 
                      ${db.escape(usia)}
                    )`;

    let sqlGet = `SELECT * FROM tb_users`;

    db.query(sqlInsert, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      db.query(sqlGet, (errGet, resultsGet) => {
        if (errGet) {
          console.log(errGet);
          res.status(500).send(errGet);
        }
        res.status(200).send(resultsGet);
      });
    });
  },
  /* Added Address */
  addAlamat: (req, res) => {
    let {
      iduser,
      kelurahan,
      kecamatan,
      kota,
      provinsi,
      kodepos,
      phone,
    } = req.body;

    let sqlInsert = `INSERT INTO tb_alamat (iduser, kelurahan, kecamatan, kota, provinsi, kodepos, phone) 
                    VALUES (
                      ${iduser}, 
                      ${db.escape(kelurahan)}, 
                      ${db.escape(kecamatan)}, 
                      ${db.escape(kota)}, 
                      ${db.escape(provinsi)},
                      ${db.escape(kodepos)}, 
                      ${db.escape(phone)}
                    )`;

    let sqlGet = `SELECT * FROM tb_alamat`;

    db.query(sqlInsert, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      db.query(sqlGet, (errGet, resultsGet) => {
        if (errGet) {
          console.log(errGet);
          res.status(500).send(errGet);
        }
        res.status(200).send(resultsGet);
      });
    });
  },
  /* insert method */
  registerUser: (req, res) => {
    let {
      username,
      password,
      email,
      role,
      note,
      usia,
      kelurahan,
      kecamatan,
      kota,
      provinsi,
      kodepos,
      phone,
    } = req.body;

    let sqlInsert = `INSERT INTO tb_users (username, password, email, role, note, usia) 
                    VALUES (
                      ${db.escape(username)}, 
                      ${db.escape(password)}, 
                      ${db.escape(email)}, 
                      ${db.escape(role)}, 
                      ${db.escape(note)}, 
                      ${db.escape(usia)}
                    )`;
    db.query(sqlInsert, (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log(results);
      let sqlInsertAlamat = `INSERT INTO tb_alamat VALUES 
                    (
                      null,
                      ${results.insertId}, 
                      ${db.escape(kelurahan)}, 
                      ${db.escape(kecamatan)}, 
                      ${db.escape(kota)}, 
                      ${db.escape(provinsi)},
                      ${db.escape(kodepos)}, 
                      ${db.escape(phone)}
                    )`;

      db.query(sqlInsertAlamat, (errAlamat, resultsAlamat) => {
        if (errAlamat) {
          res.status(500).send(errAlamat);
        }
        console.log(resultsAlamat);
      });
    });
  },
  /* update data */
  updateUser: (req, res) => {
    let dataUpdate = [];
    for (x in req.body) {
      console.log(x);
      dataUpdate.push(`${x} = ${db.escape(req.body[x])}`);
    }

    console.log(dataUpdate.toString());

    let sqlUpdate = `UPDATE tb_users 
                      SET ${dataUpdate} 
                      WHERE iduser=${req.params.id}`;

    db.query(sqlUpdate, (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log(results);
      res.status(200).send(results);
    });
  },
  getAllData: (req, res) => {
    let sqlGet = `SELECT * FROM tb_alamat ua
                  JOIN tb_users us
                  ON  ua.iduser = us.iduser
                  WHERE ua.iduser = ${req.query.id}`;

    db.query(sqlGet, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      console.log(results);
      res.status(200).send(results);
    });
  },
};
