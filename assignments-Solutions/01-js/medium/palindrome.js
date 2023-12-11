/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str
  .toLowerCase() //Convert it to LowerCase
  .trim() //Remove All Spaces Value
  .replace(/[^a-zA-Z0-9]/g, ""); //Remove All NonAlphaNumeric Value
for (let i = 0; i < str.length; i++) {
  if (str[i] != str[str.length - 1 - i]) {
    return false;
  }
}
return true;
}

module.exports = isPalindrome;
