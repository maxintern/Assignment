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
  console.log(Student.subjectId);
  if (Student.id == undefined) {
    console.log("id is required");
  } else if (typeof Student.id != "number") {
    console.log("Student id has to be a number");
  } else {
    console.log("id value is not ok");
  }

  if (Student.firstName == undefined) {
    console.log("firstName is required");
  } else if (typeof Student.firstName == "string") {
    console.log("firstName has to be string");
  } else {
    console.log("firstName is not ok");
  }

  if (Student.lastName == undefined) {
    console.log("lastName is required");
  } else if (typeof Student.lastName == "string") {
    console.log("lastName has to be string");
  } else {
    console.log("lastName is not ok");
  }

  if (Student.phone == undefined) {
    console.log("phone number is required");
  } else if (typeof Student.phone == "number") {
    console.log("phone number is ok");
  } else {
    console.log("phone number is not ok");
  }

  for (const element in Student.classes) {
    console.log(Student.classes[element].classId);
    console.log(Student.classes[element].subjectName);
    console.log(Student.classes[element].obtainMark);

    if (Student.classes[element].classId == undefined) {
      console.log("class id is required");
    } else if (typeof Student.classes[element].classId == "number") {
      console.log("class id is ok");
    } else {
      console.log("class id is not ok");
    }
    if (Student.classes[element].subjectName == undefined) {
      console.log("subject name is required");
    } else if (typeof Student.classes[element].subjectName == "string") {
      console.log("subject name is ok");
    } else {
      console.log("subject name is not ok");
    }

    if (Student.classes[element].obtainMark == undefined) {
      console.log("obtain mark is required");
    } else if (typeof Student.classes[element].obtainMark == "number") {
      console.log("obtain mark is ok");
    } else {
      console.log("obtain mark is not ok");
    }
  }

  console.log(Student.address.line1);
  console.log(Student.address.line2);
  console.log(Student.address.thana);
  console.log(Student.address.district);
  console.log(Student.address.postcode);

  if (Student.address.line1 == undefined) {
    console.log("line1 is required");
  } else if (typeof Student.address.line1 == "string") {
    console.log("line1 is ok");
  } else {
    console.log("line1 is  not ok");
  }
  if (Student.address.line2 == undefined) {
    console.log("line2 is required");
  } else if (typeof Student.address.line2 == "string") {
    console.log("line2 is ok");
  } else {
    console.log("line2 is  not ok");
  }

  if (Student.address.thana == undefined) {
    console.log("thana is required");
  } else if (typeof Student.address.thana == "string") {
    console.log("thana is ok");
  } else {
    console.log("thana is  not ok");
  }

  if (typeof Student.address.district == "string") {
    console.log("district is ok");
  } else {
    console.log("district is  required");
  }

  if (Student.address.postcode == undefined) {
    console.log("post code is required");
  } else if (typeof Student.address.postcode == "number") {
    console.log("postcode is ok");
  } else {
    console.log("postcode is  not ok");
  }
  for (const value of Student.subjectId) {
    console.log(value);

    if (typeof Student.subjectId == "number") {
      console.log("subject id is ok");
    } else if (Student.subjectId.length == 0) {
      console.log("subject id is ok");
    } else {
      console.log('"subject id is required"');
    }
  }
  if (Student.dateOfBirth == undefined) {
    console.log("date of birth is required");
  } else if (typeof Student.dateOfBirth == "string") {
    console.log("date of birth is ok");
  } else {
    console.log("date of birth is not ok");
  }
}

input();
