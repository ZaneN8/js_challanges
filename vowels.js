// Create a function that will receive a string of text of any length and return the number of vowels found within the text.

// Bonus:
// Return the vowels used and the number of times it was used.

// sets vowels
const Vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelCount(word, vowels) {
  vowelNumber = 0;

  if (word.includes(vowels)) {
    vowelNumber++;
  }

  return vowelNumber;
}

function render() {
  word = "";
  vowelCount();
}
render();
