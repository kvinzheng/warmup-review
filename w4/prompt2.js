// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].
//Make sure not to return a copy of the array.

function rotate(arr,k) {
  //write solution here
  for(let i = 0; i < k; i++){
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log('rotate===', rotate([1,2,3,4,5,6,7], 3))
