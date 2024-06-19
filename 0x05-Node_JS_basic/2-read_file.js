const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    const studentsByField = {};
    let numberStudents = 0;
    lines.forEach((line) => {
      if (line && !line.startsWith('firstname')) {
        const [studentFirstname, , , field] = line.split(',').map((item) => item.trim());
        numberStudents += 1;

        if (!(field in studentsByField)) {
          studentsByField[field] = {};
          studentsByField[field].total = 1;
          studentsByField[field].studentsList = [];
          studentsByField[field].studentsList.push(studentFirstname);
        } else {
          studentsByField[field].total += 1;
          studentsByField[field].studentsList.push(studentFirstname);
        }
      }
    });
    console.log(`Number of students: ${numberStudents}`);
    for (const field of Object.getOwnPropertyNames(studentsByField)) {
      const { total } = studentsByField[field];
      const students = studentsByField[field].studentsList.join(', ');
      console.log(`Number of student in ${field}: ${total}. List: ${students}`);
    }
  } catch (error) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
