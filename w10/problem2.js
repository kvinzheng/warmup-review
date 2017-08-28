// Create a function accum that takes a string and outputs a string with the following:
// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"
function accum(parameter) {
  return parameter.split('').map( (ele, index) => {
    let res = ele.toUpperCase();
    for(let i = 1; i <= index; i++){
      res = res + ele.toLowerCase();
    }
    return res;
  }).join('-')
}

console.log('accum===='accum('abcd'));
