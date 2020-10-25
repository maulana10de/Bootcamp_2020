const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./database');
const app = express();

const PORT = 5000;

// fungsi untuk check koneksi database
db.connect((err) => {
  if (err) {
    console.error('error connecting : ' + err.stack);
  }
  console.log('connected as id : ' + db.threadId);
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World</nph1>');
});

/* START ROUTES */
const { usersRouter } = require('./routers');

app.use('/user', usersRouter);
/* END ROUTES */

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
