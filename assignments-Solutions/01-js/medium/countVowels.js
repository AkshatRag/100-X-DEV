/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count =0;
    const vowelsLetters=['a','e','i','o','u'];
    NewStr=str.toLowerCase();
    for(let i=0; i<NewStr.length;i++){
      for(let j=0;j<=4;j++){
        if(NewStr[i]==vowelsLetters[j]){
          count++;
        }
      }
    }
    return count;
}

let countfunction = countVowels("aeuiou");
console.log(countfunction);

module.exports = countVowels;