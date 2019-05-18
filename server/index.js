const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const bodyparser = require('body-parser');
app.use(bodyparser());

app.get('/hello', (req, res) => {
  res.send('welcome');
});
app.use('/api', require('./routes')());

app.listen(9090, () => console.log('server listen on 9090'));
