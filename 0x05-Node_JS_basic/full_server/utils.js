/* eslint-disable consistent-return */
const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      const lines = data.trim().split('\n');
      const result = {};

      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (result[field]) {
          result[field].push(firstname);
        } else {
          result[field] = [firstname];
        }
      });

      resolve(result);
    });
  });
}

module.exports = { readDatabase };
