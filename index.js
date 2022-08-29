function reverse(word){
  return word.split('').reverse().join('');
} 
function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverse (word);
  return word === reverse(word);
}

/* 
  Add your pseudocode here
  word should be same as reversed word
  if word===returned word return true
  if not return false
*/

/*
  Add written explanation of your solution here
  word.split- splits the word into letters in an array
  .reverse reverses the elements of the array
  .join joins the elements in array into a word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log('Expecting: true');
  console.log('=>', isPalindrome('mom'));
  console.log('');

  console.log('Expecting: true');
  console.log('=>', isPalindrome('abba'));
  console.log('');

  console.log('Expecting: true');
  console.log('=>', isPalindrome('a'));
  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('hi'));
  console.log('');

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
