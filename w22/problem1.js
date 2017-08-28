function frequent(arr){
  let obj = {};
  let max = -Infinity;
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === undefined){
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  for(let key in obj){
    if(obj[key] > max){
      max = obj[key];
      result = key;
    }
  }
  return result;
}
console.log('frequent==', frequent([1,2,2,2,3]));
