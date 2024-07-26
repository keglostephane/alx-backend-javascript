/* eslint-disable consistent-return */
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      let result = 'This is the list of our students\n';

      Object.keys(data).sort((a, b) => a
        .toLowerCase()
        .localeCompare(b.toLowerCase()))
        .forEach((field) => {
          const students = data[field];
          result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

      res.status(200).send(result.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('./database.csv');

      if (!data[major]) {
        return res.status(500).send('Cannot load the database');
      }

      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
