//Given two arrays, find the similar values between both and return those
//similar values in an array. Do not have duplicate values in the return array
//Ex: findSimilar([1,2,false,[2,3],{foo:'bar'},[5,6],'hi'],[0,2,[5,6],true,'hi',2,1,{foo:'bar'},{bar:'foo'}])
// -> [1,2,{foo:'bar'},[5,6],'hi']

function findSimilar(arr1,arr2) {
  // Your solution here
  let result = [];
  let newArr1 = arr1.map( (element) => { return JSON.stringify(element); });
  let newArr2 = arr2.map( (element) => { return JSON.stringify(element);});
  for(let i = 0 ; i < newArr1.length; i++){
    if(newArr2.indexOf(newArr1[i]) !== -1){
      result.push(newArr1[i]);
    }
  }
  return result.map((ele) => { return JSON.parse(ele)});
}
