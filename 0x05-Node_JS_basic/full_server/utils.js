const fs = require('fs');

const readDatabase = (Path) => new Promise((resolve, reject) => {
  fs.readFile(Path, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    } else if (data) {
      const students = {};
      const lines = data.split('\n');

      for (let i = 1; i < lines.length; i += 1) {
        if (lines[i].trim()) { // Ensure the line is not empty
          const fields = lines[i].split(',');
          const course = fields[3];
          const firstName = fields[0];
          if (Object.prototype.hasOwnProperty.call(students, course)) {
            students[course].push(firstName);
          } else {
            students[course] = [firstName];
          }
        }
      }
      resolve(students);
    }
  });
});

module.exports = readDatabase;