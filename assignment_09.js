const Student = {
  id: 101,
  firstName: "Jhon",
  lastName: "Hasan",
  phone: 1521334597,

  classes: [
    {
      classId: 102,
      subjectName: "English",
      obtainMark: 80,
    },

    {
      classId: 103,
      subjectName: "Math",
      obtainMark: 90,
    },
  ],

  address: {
    line1: "Hello",
    line2: "World",
    thana: "Kafrul",
    district: "dhaka",
    postcode: 8602,
  },

  subjectId: [101, 102, 103, 104, 110, 500],
  dateOfBirth: "15.06.2000",
};

function input() {
  
  if (Student.id == undefined) {
    throw "id is required";
  } else if (typeof Student.id == "number") {
    throw "Student id has to be a number";
  } else {
    throw "id value is not ok";
  }

  if (Student.firstName == undefined) {
    throw "firstName is required";
  } else if (typeof Student.firstName == "string") {
    throw"firstName has to be string";
  } else {
    throw "firstName is not ok";
  }

  if (Student.lastName == undefined) {
    throw "lastName is required";
  } else if (typeof Student.lastName == "string") {
    throw "lastName has to be string";
  } else {
    throw "lastName is not ok";
  }

  if (Student.phone == undefined) {
    throw "phone number is required";
  } else if (typeof Student.phone == "number") {
    throw "phone number is ok";
  } else {
    throw "phone number is not ok";
  }

  for (const element in Student.classes) {
    console.log(Student.classes[element].classId);
    console.log(Student.classes[element].subjectName);
    console.log(Student.classes[element].obtainMark);

    if (Student.classes[element].classId == undefined) {
      throw "class id is required";
    } else if (typeof Student.classes[element].classId == "number") {
      throw "class id is ok";
    } else {
      throw "class id is not ok";
    }
    if (Student.classes[element].subjectName == undefined) {
      throw "subject name is required";
    } else if (typeof Student.classes[element].subjectName == "string") {
      throw "subject name is ok";
    } else {
      throw "subject name is not ok";
    }

    if (Student.classes[element].obtainMark == undefined) {
      throw "obtain mark is required";
    } else if (typeof Student.classes[element].obtainMark == "number") {
      throw "obtain mark is ok";
    } else {
      throw"obtain mark is not ok";
    }
  }

  // console.log(Student.address.line1);
  // console.log(Student.address.line2);
  // console.log(Student.address.thana);
  // console.log(Student.address.district);
  // console.log(Student.address.postcode);

  if (Student.address.line1 == undefined) {
    throw "line1 is required";
  } else if (typeof Student.address.line1 == "string") {
    throw "line1 is ok";
  } else {
    throw "line1 is  not ok";
  }
  if (Student.address.line2 == undefined) {
    throw "line2 is required";
  } else if (typeof Student.address.line2 == "string") {
    throw "line2 is ok";
  } else {
    throw "line2 is  not ok";
  }

  if (Student.address.thana == undefined) {
    throw "thana is required";
  } else if (typeof Student.address.thana == "string") {
    throw "thana is ok";
  } else {
    throw "thana is  not ok";
  }

  if (typeof Student.address.district == "string") {
    throw "district is ok";
  } else {
    throw "district is  required";
  }

  if (Student.address.postcode == undefined) {
    throw "post code is required";
  } else if (typeof Student.address.postcode == "number") {
    throw "postcode is ok";
  } else {
    throw "postcode is  not ok";
  }
  
    
    if (Student.subjectId.length == 0) {
      throw "subject id can be blank";
    } else if (typeof Student.subjectId == "number") {
      throw "subject id is ok";
    } else {
      throw "subject id is required";
    }
  
  if (Student.dateOfBirth == undefined) {
    throw "date of birth is required";
  } else if (typeof Student.dateOfBirth == "string") {
    throw "date of birth is ok";
  } else {
    throw "date of birth is not ok";
  }
}

input();
