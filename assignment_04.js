function convertToObject(array) {
  const obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[i+1] = array[i];
  }
  return obj;
}
