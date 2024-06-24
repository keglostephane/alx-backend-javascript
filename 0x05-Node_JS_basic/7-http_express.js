const express = require('express');
const fsPromises = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(filePath) {
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    const lines = data.split('\n');
    const studentsByField = {};
    let numberStudents = 0;

    lines.forEach((line) => {
      if (line && !line.startsWith('firstname')) {
        const [studentFirstname, , , field] = line.split(',').map((item) => item.trim());
        numberStudents += 1;

        if (!(field in studentsByField)) {
          studentsByField[field] = {
            total: 1,
            studentsList: [studentFirstname],
          };
        } else {
          studentsByField[field].total += 1;
          studentsByField[field].studentsList.push(studentFirstname);
        }
      }
    });

    return {
      numberStudents,
      studentsByField,
    };
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  let body = 'This is the list of our students\n';
  try {
    const studentsData = await countStudents(process.argv[2]);
    body += `Number of students: ${studentsData.numberStudents}`;

    for (const [key, value] of Object.entries(studentsData.studentsByField)) {
      body += `\nNumber of students in ${key}: ${value.total}. List: ${value.studentsList.join(', ')}`;
    }
    res.send(body);
  } catch (error) {
    res.status(500).send(body + error.message);
  }
});

app.listen(port);

module.exports = app;
