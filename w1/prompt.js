// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'

// Stretch goal!!
// Write a function named alphaCypher which takes a string and returns the string with the number of times a specific letter is included in the string.
// Single instances are ignored.
//   alphaCypher('AABB'); // 'A2B2'
//   alphaCypher('AaAaBbBb'); // 'A2a2B2b2'
//   alphaCypher('cAterrrrRRCaT'); // 'cAter4R2Cat'

function removeDupes(input){
   let result = '';
   for(let i = 0; i < input.length; i++){
     let current= input[i];
     if(result.indexOf(current) === -1){
     result = result + input[i];
     }
   }
   return result;
}
console.log(removeDupes('AaAaBbBb'));

function removeDupesCI(input){
  var result = '';
  for(var i = 0; i < input.length; i++){
    if(result.toLowerCase().indexOf(input[i].toLowerCase()) === -1){
    result = result + input[i];
    }
  }
  return result;
}

console.log(removeDupesCI('AaAaBbBb'))
