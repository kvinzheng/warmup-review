// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "wookiE", return "wEikoo".

function reverseVowels (s) {
  let stack = [];
  let arr = s.split('')
  let vowels = 'aeiouAEIOU';
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    if(vowels.indexOf(current) !== -1){
      stack.push(current);
    }
  }
  for(let j =0 ; j < arr.length; j++){
    let current = arr[j];
    if(vowels.indexOf(current) !== -1){
      arr[j] = stack.pop();
    }
  }
  return arr.join('');
}

console.log('reverseVowels===',reverseVowels("hello"));
