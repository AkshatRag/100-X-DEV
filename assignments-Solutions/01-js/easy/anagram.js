/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   if (str1.length === str2.length) {
      str1 = str1.toLowerCase();  // convert to lowercase 
      str2 = str2.toLowerCase();
      let arr1 = str1.split("");  // convert string to array
      let arr2 = str2.split("");
      arr1.sort();                // sort array
      arr2.sort();
      str1 = arr1.join("");       // convert array to string
      str2 = arr2.join("");
      return str1 === str2;       // compare strings
    }
    return false
}


module.exports = isAnagram;
