// Create a function that will receive a string of text of any length and return the number of vowels found within the text.

// Bonus:
// Return the vowels used and the number of times it was used.

const Vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelCount(word) {
  vowelNumber = 0;

  if (word.includes(Vowels)) {
    vowelNumber++;
  }

  return vowelNumber;
}

function render() {
  word = "";
  vowelCount();
}
render();
