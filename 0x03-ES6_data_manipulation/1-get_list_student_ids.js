// list  students

const getListStudentIds = (ids) => {
  if (!Array.isArray(ids)) {
    return [];
  }
  const stids = ids.map((item) => item.id);

  return stids;
};

export default getListStudentIds;
