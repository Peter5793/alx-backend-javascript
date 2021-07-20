class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this.name = name;
    this.students = students;
    this.length = length;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Lenght must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(currStudents) {
    if (typeof currStudents === 'object') {
      for (const student in currStudents) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be in the array');
        }
      }
    } else {
      throw new TypeError('Student must be in the Array');
    }
    this._students = currStudents;
  }
}
export default HolbertonCourse;
