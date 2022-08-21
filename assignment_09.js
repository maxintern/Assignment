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

  subjectId: [10, 20, 30],
  dateOfBirth: "15.06.1998",
};

function validateStudent() {
  // console.log(Student.phone);

  let num1 = Student.phone;
  let text = num1.toString();
  let num2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let value = 0;

  // Student ID validation start
  if (Student.id == undefined) {
    throw "id is required";
  }
  if (parseInt(Student.id) !== Student.id) {
    throw "Student id has to be an integer";
  }
  // Student ID validation end

  // Student first name validation start
  if (!Student.firstName) {
    throw "firstName is required";
  }
  if (typeof Student.firstName != "string") {
    throw "firstName has to be a string";
  }
  // Student first name validation end

  // Student last name validation start
  if (Student.lastName == undefined) {
    throw "lastName is required";
  }
  if (typeof Student.lastName != "string") {
    throw "lastName has to be string";
  }
  // Student last name validation end

  // Student phone validation start
  if (Student.phone == undefined) {
    throw "phone number is required";
  }

  for (let i = 0; i < text.length; i++) {
    if (num2.indexOf(text[i]) == -1) {
      throw "phone number has to be numeric";
    }
  }
  // Student phone validation end

  // Student subject id validation start
  if (Student.subjectId == undefined) {
    throw "Subject Id is required";
  }
  if (!Array.isArray(Student.subjectId)) {
    throw "Subject Id has to be an array";
  }

  for (let i = 0; i < Student.subjectId.length; i++) {
    if (Student.subjectId[i] !== parseInt(Student.subjectId[i])) {
      throw "Subject Id has to be an array of integers";
    }
  }
  // Student subject id validation end

  // Student date of birth id validation start
  if (Student.dateOfBirth == undefined) {
    throw "date of birth is required";
  }
  if (Date.parse(Student.dateOfBirth) == NaN ) {
    throw "date of birth has to be a date string";
  }
  // Student date of birth validation end

  if(Student.classes == undefined){
    throw "classes is required";
  }

  if(!Array.isArray(Student.classes)){
    throw "Classes has to be an array";
  }

  if(Student.classes.length <1){
    throw "Classes length has to be at least 1";
  }
  
  for (let i = 0; i < Student.classes.length; i++) {
    const element = Student.classes[i];
    validateClass(element);    
  }
  

  validateAddress(Student.address);

  console.log("All INPUT IS OK");
}

validateStudent();

function validateClass(classData) {
  if (typeof classData != "object") {
    throw "class data should be an object";
  }

  if (classData.classId == undefined) {
    throw "class id is required";
  }
  if ( parseInt(classData.classId) != classData.classId ) {
    throw "class id has to be an integer";
  }
  if (classData.subjectName == undefined) {
    throw "subject name is required";
  }
  if (typeof classData.subjectName != "string") {
    throw "subject name has to be a string";
  }

  if ( parseFloat(classData.obtainMark) != classData.obtainMark ) {
    throw "obtain mark has to be a number";
  }

  if ( classData.obtainMark < 0 || classData.obtainMark > 100 ) {
    throw "obtain mark should between 0 and 100";
  }
}

function validateAddress(addressData) {
  let num1 = Student.address.postcode;
  let text = num1.toString();
  let num2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let value = 0;
  if (typeof addressData != "object") {
    throw "address data should be validate";
  }
  if (addressData.line1 == undefined) {
    throw "line1 is required";
  }
  if (typeof addressData.line1 != "string") {
    throw "line1 has to be string";
  }
  
  if (typeof addressData.line2 != "string") {
    throw "line2 has to be string";
  }

  if (addressData.thana == undefined) {
    throw "thana name is required";
  }
  if (typeof addressData.thana != "string") {
    throw "thana name has to be string";
  }

  if (addressData.district == undefined) {
    throw "ditrict name is required";
  }
  if (typeof addressData.district != "string") {
    throw "district name has to be string";
  }

  if (addressData.postcode == undefined) {
    throw "post code is required";
  }
  // if (Number(Student.address.postcode) != Student.address.postcode) {
  //   throw "postcode has to be numeric";
  // }

  for (let i = 0; i < text.length; i++) {
    if (num2.indexOf(text[i]) == -1) {
      throw "postcode has to be numeric";
    }
  }

}
