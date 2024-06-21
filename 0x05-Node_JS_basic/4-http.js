/* eslint-disable no-param-reassign */
const http = require('http');

const app = http.createServer();

app
  .on('request', (req, resp) => {
    resp.statusCode = 200;
    resp.write('Hello Holberton School!');
    resp.end();
  })
  .listen(1245);

module.exports = app;
