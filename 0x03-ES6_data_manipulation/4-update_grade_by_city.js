/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(listStudents, city,
  newGrades) {
  const studentsIdsWithNewGrade = newGrades.map((grade) => grade.studentId);
  const studentsFromCity = listStudents.filter(
    (student) => student.location === city,
  );

  studentsFromCity.forEach(
    (student) => {
      if (studentsIdsWithNewGrade.includes(student.id)) {
        student.grade = newGrades.filter(
          (grade) => grade.studentId === student.id,
        )[0].grade;
      } else {
        student.grade = 'N/A';
      }
    },
  );
  return studentsFromCity;
}
