// You have to create a method "compoundArray" which should take as input
// two int arrays of different length and return one int array with
// numbers of both arrays shuffled one by one.
// Example:
// compoundArray([1,2,3,4,5,6],[9,8,7,6]) => [1,9,2,8,3,7,4,6,5,6];

function compoundArray() {
  let arg1 = arguments[0];
  let arg2 = arguments[1];
  let result = [];
  let maxLength = Math.max(arg1.length, arg2.length);
  for(let i = 0; i < maxLength; i++){
    if(arg1[i] !== undefined) result.push(arg1[i]);
    if(arg2[i] !== undefined) result.push(arg2[i]);
  }
  return result;
}

console.log(compoundArray([1,2,3,4,5,6],[9,8,7,6]));
