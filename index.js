const express = require('express');
const routerApi= require('./routes');
const app = express();
const port = 3000;
const IP = "192.168.10.10";

app.get('/', (req, res) => {
  res.send('This is a practice for an express webserver');
});

routerApi(app);

app.listen(port, () => {
  console.log('My port ' + port);
});
