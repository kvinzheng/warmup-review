// Write a function that takes a string and returns an object
// with the vowels in that string as keys and their value is how many times
// they occurred in the string. The counter function should not care about case.
// The keys in the object should all be lowercase.
// Ex: countVowels('aAbcdade') -> {a:3,e:1}

function countVowels(s) {
  let obj = {};
  let vowels = 'aeiouAEIOU';
  s = s.split('').filter((ele) => {
    return vowels.indexOf(ele) !== -1
  }).join('');
  for (let i = 0; i < s.length; i++) {
    let current = s[i].toLowerCase();
    if (obj[current]) {
      obj[current] += 1;
    } else {
      obj[current] = 1;
    }
  }
  return obj;
}

console.log('countVowels===', countVowels('aAbcdade'))
