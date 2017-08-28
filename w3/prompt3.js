// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)

function doubleChar(str) {
  let result = '';
  if(typeof str !== 'string') return "Ruh roh! That isn't a string!";
  for(let i = 0 ; i < str.length; i++){
    result += str[i] + str[i];
  }
  return result;
}

console.log('doubleChar==', doubleChar("Hello World"));
