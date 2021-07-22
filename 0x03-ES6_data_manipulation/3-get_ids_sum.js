// return the sum of all the ids

const getStudenIdsSum = (students) => {
  const all = students
    .map((student) => student.id)
    .reduce((studentPrev, studentCurrent) => studentPrev + studentCurrent);

  return all;
};

export default getStudenIdsSum;
