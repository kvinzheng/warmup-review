let assert = require('chai').assert
let wordCounter = require('../prompt.js').wordCounter


describe('count words', function() {
  it('should return the correct word count', function() {
    let counter = wordCounter("Lorem ipsum");
    assert.equal(counter.count("Lorem"), 1);
    assert.equal(counter.count("hey"), 0);
  });
});
