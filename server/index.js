const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser());

app.use('/api', require('./routes')());

app.listen(9090, () => console.log('server listen on 9090'));
