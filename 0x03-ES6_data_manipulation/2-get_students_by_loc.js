// Filter that is based on the city

const getStudentByLocation = (students, city) => {
  const studentsLocation = students.filter(
    (student) => student.location === city,
  );

  return studentsLocation;
};

export default getStudentByLocation;
