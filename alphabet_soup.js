// Have the function alphabetSoup(str) take the str string parameter being
// passed and return the string with the letters in alphabetical order
// (ie. hello becomes ehllo). Assume numbers and punctuation symbols will
// not be included in the string.

function alphabetSoup(str) {
  // take a word

  str.split("").forEach(function (tempArray) {
    tempArray.sort();
  });
  // make in an array

  // tempArray.sort();
  // sort array
  return str(tempArray);
  // return array as a string
}

order = alphabetSoup("hello");
console.log(order);
