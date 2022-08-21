const Student = {
  id: 102,
  firstName: "Labib",
  lastName: "Hasan",
  phone: "01521334597",

  classes: [
    {
      classId: 100,
      subjectName: "English",
      obtainMark: 10,
    },

    {
      classId: 12,
      subjectName: "Math",
      obtainMark: 90,
    },
  ],

  address: {
    line1: "Hello",
    line2: "World",
    thana: "Kafrul",
    district: "dhaka",
    postcode: "0123",
  },

  subjectId: [10,20,30],
  dateOfBirth: "15.06.1998",
};

function input() {
  // console.log(Student.phone);

  
  let num1 = Student.phone;
  let text = num1.toString();
  let num2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let value = 0;

  if (Student.id == undefined) {
    throw "id is required";
  }
  if (parseInt(Student.id) !== Student.id) {
    throw "Student id has to be an integer";
  }

  if (Student.firstName == undefined) {
    throw "firstName is required";
  }
  if (typeof Student.firstName != "string") {
    throw "firstName has to be a string";
  }

  if (Student.lastName == undefined) {
    throw "lastName is required";
  }
  if (typeof Student.lastName != "string") {
    throw "lastName has to be string";
  }

  if (Student.phone == undefined) {
    throw "phone number is required";
  }

  if (Number(Student.phone) != Student.phone) {
    throw "phone number has to be numeric";
  }

  // if(text[0] != 0){
  //   throw "Can be start with zero";
  // }

  for (let i = 0; i < text.length; i++) {
    if (num2.indexOf(text[i]) == -1) {
      value += 1;

      throw "phone number has to be numeric";
    }
  }

  for (const element in Student.classes) {
    if (Student.classes[element].classId == undefined) {
      throw "class id is required";
    }
    if (
      parseInt(Student.classes[element].classId) !==
      Student.classes[element].classId
    ) {
      throw "class id has to be an integer";
    }
    if (Student.classes[element].subjectName == undefined) {
      throw "subject name is required";
    }
    if (typeof Student.classes[element].subjectName != "string") {
      throw "subject name has to be a string";
    }

    if (
      parseInt(Student.classes[element].obtainMark) !==
      Student.classes[element].obtainMark
    ) {
      throw "obtain mark has to be a number";
    }
    // console.log(Student.classes[element].obtainMark);
    if (
      Student.classes[element].obtainMark < 0 ||
      Student.classes[element].obtainMark > 100
    ) {
      throw "obtain mark should between 0 to 100 numbers";
    }
  }

  if (Student.address.line1 == undefined) {
    throw "line1 is required";
  }
  if (typeof Student.address.line1 != "string") {
    throw "line1 has to be string";
  }
  // if (Student.address.line2 == undefined) {
  //   throw "line2 is required";}
  if (typeof Student.address.line2 != "string") {
    throw "line2 has to be string";
  }

  if (Student.address.thana == undefined) {
    throw "thana name is required";
  }
  if (typeof Student.address.thana != "string") {
    throw "thana name has to be string";
  }

  if (Student.address.district == undefined) {
    throw "ditrict name is required";
  }
  if (typeof Student.address.district != "string") {
    throw "district name has to be string";
  }

  if (Student.address.postcode == undefined) {
    throw "post code is required";
  }
  if (Number(Student.address.postcode) != Student.address.postcode) {
    throw "postcode has to be numeric";
  }

  for (let i = 0; i < text.length; i++) {
    if (num2.indexOf(text[i]) == -1) {
      value += 1;

      throw "postcode has to be numeric";
    }
  }

  if (Student.subjectId == undefined) {
    throw "Suject Id is required";
  }
  if (!Array.isArray(Student.subjectId)) {
    throw "Suject Id has to be an array";
  }

  for (let i = 0; i < Student.subjectId.length; i++) {
    if (Student.subjectId[i] !== parseInt(Student.subjectId[i])) {
      throw "Subject Id has to be an array of integers";
    }
  }

  if (Student.dateOfBirth == undefined) {
    throw "date of birth is required";
  }
  if (typeof Student.dateOfBirth != "string") {
    throw "date of birth has to be string";
  }

  console.log("ALL INPUT IS OK");
}

input();
