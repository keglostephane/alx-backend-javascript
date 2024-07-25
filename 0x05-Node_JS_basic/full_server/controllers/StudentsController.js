const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString()).then((data) => {
      let result = 'This is the list of our students\n';
      const fields = Object.keys(data).sort();

      for (let i = 0; i < fields.length; i += 1) {
        result += `Number of students in ${fields[i]}: ${data[fields[i]].length}. List: ${data[fields[i]].join(', ')}\n`;
      }

      res.status(200).send(result.trim());
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    readDatabase(process.argv[2].toString()).then((data) => {
      if (!(major in data)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        const result = `List: ${data[major].join(', ')}`;
        res.status(200).send(result);
      }
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;