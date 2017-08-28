//Find pairs in an integer array whose sum is equal to 10

//Now do it in linear time.
function sumEqualNum(arr, target) {
  let result = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (obj[target - current]) {
      let cur = [current, target - current];
      result.push(cur);
    } else {
      obj[current] = true
    }
  }

  return result;
}
console.log('result=', sumEqualNum([1,2,3,4,5,6,7,8],10))
