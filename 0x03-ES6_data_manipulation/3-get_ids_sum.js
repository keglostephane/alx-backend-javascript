export default function getStudentsIdsSum(listStudents) {
  const listStudentsIds = listStudents.map((student) => student.id);
  return listStudentsIds.reduce((sum, id) => sum + id, 0);
}
