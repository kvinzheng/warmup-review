// You need to write a method that counts the number of occurences
// of a word in a given text.

// The word counter is created as follows:

// var sample  = "Lorem ipsum";
// var counter = wordCounter(text);
// Then one can get the count for a given word like this:

// console.log(counter.count("Lorem")); // 1
// console.log(counter.count("hey"));   // 0
// The input texts are simple: they only contain ASCII characters,
// words are either separate by white spaces or punctuation
// (only , and .). If the input only contain punctuation or white
// spaces, it should return a count of 0 for all words.

// For performance reasons, your implementations should count
// the words once and not parse the text each time the count
// method is called.

function wordCounter(string){
  let obj = {};
  let stack = [];
  let s = string.split(' ')
  for(let i = 0; i < s.length; i++){
    stack.push(s[i]);
  }
  for(let i = 0; i < stack.length; i++){
    let current = stack[i];
    if(obj[current]){
      obj[current] += 1;
    } else {
      obj[current] = 1;
    }
  }

  return { count: (word) => { return obj[word] || 0 } };
}

module.exports = {
  wordCounter,
};
