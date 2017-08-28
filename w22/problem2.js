function memoize(fn) {
  let store = {};
  return memoizaedFunction = function(...args) {
    let memo = store[Array.from(args).toString()];
    if (memo !== undefined) {
      return memo;
    } else {
      let result = fn(...args);
      store[args.toString()] = result;
      return result;
    }
  }
}

let add = function(var1, var2) {
  return var1 + var2
}

let memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(6, 1));
