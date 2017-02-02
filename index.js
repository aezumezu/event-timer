const express = require('express');
const Logger = require('./tracer');

const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

app.use(router);
app.use(express.static(__dirname + '/public'));

// render the timer page
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  Logger.info(`App started on port: ${port}`);
});
