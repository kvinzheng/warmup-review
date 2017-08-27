// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening. Some examples:
//  flatten([]) // should return []
//  flatten([1, 2, 3]) //should return [1,2,3]
//  flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]) //should return [1, 2, 3, "a", "b", "c", 1, 2, 3]
//  flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]) //should return [3, 4, 5, [9, 9, 9], "a,b,c"]

function flatten(array){
  if(array.length === 0){
    return [];
  }
  let result = [];
  for(let i = 0 ; i < array.length; i ++){
    let current = array[i];
    if(Array.isArray(current)){
      result = [...result,...current]
    }else {
      result.push(current);
    }
  }
  return result;
}

console.log('flatten===', flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]));
console.log('flatten===', flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]));
