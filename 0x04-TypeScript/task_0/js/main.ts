interface Student {
  firstName: string;
  lastName: string;
  age:number;
  location:string;
}

const student_A: Student = {
  firstName: 'Peter',
  lastName: 'Lugalia',
  age: 23,
  location: 'Kassel',
}

const student_B: Student = {
  firstName: 'Monica',
  lastName: 'Kalee',
  age: 23,
  location: 'Athens',
}

const studentList = [student_A, student_B];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
