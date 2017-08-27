// Description:

// Trolls are attacking your comment section!

// A common way to deal with this situation is
// to remove all of the vowels from the trolls'
// comments, neutralizing the threat.

// Your task is to write a function that takes
// a string and return a new string with all vowels removed.

// For example, the string "This website is
// for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function antiTroll (string) {
  let str = string;
  let result = ''
  let vowels = 'aeiouAEIOU'
  for(let i = 0; i < str.length; i++){
    let current = str[i];
    if(vowels.indexOf(current) === -1){
      result += current;
    }
  }
  return result;
}

console.log('antiTroll==', antiTroll('This website is for losers LOL!'));
