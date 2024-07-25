const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = 1245;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
