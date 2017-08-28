function flatten(arr){
  if(arr.length === 0){
    return [];
  }
  let temp = [];
  
  if(Array.isArray(arr[0])){
    temp =  flatten(arr[0]);
  }
  else {
    temp = [arr[0]];
  }

  return temp.concat(flatten(arr.slice(1)));
}

module.exports = flatten;
