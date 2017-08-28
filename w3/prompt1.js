function powerOf4(x) {
  while( x > 0 && x % 4 === 0 ){
    x = x/4
  }
  return x === 1;
}

function powerOf4Recursive(x){
  if(x === 1){
    return true;
  }
  if(x % 4 !== 0){
    return false;
  }
  x = x/4
  return powerOf4Recursive(x);
}

// console.log('powerof4===',powerOf4(32))
// console.log('powerof4===',powerOf4(16))
console.log('powerOf4Recursive===', powerOf4Recursive(32));
console.log('powerOf4Recursive===', powerOf4Recursive(16));
