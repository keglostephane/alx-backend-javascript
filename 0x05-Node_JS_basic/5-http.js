/* eslint-disable no-param-reassign */
const http = require('http');
const fsPromises = require('fs').promises;

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

const app = http.createServer();

app
  .on('request', async (req, resp) => {
    const { url } = req;
    resp.setHeader('Content-Type', 'text/plain');
    if (url === '/') {
      resp.statusCode = 200;
      resp.write('Hello Holberton School!');
      resp.end();
    } else if (url === '/students') {
      try {
        const studentsData = await countStudents(process.argv[2]);
        resp.statusCode = 200;
        resp.write('This is the list of our students\n');
        resp.write(`Number of students: ${studentsData.numberStudents}`);

        for (const [key, value] of Object.entries(studentsData.studentsByField)) {
          resp.write('\n');
          resp.write(`Number of students in ${key}: ${value.total}. List: ${value.studentsList.join(', ')}`);
        }
        resp.end();
      } catch (error) {
        resp.statusCode = 500;
        resp.write(error.message);
        resp.end();
      }
    } else {
      resp.statusCode = 404;
      resp.write('Not found');
      resp.end();
    }
  })
  .listen(1245);

module.exports = app;
