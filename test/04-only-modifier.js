// From codewars.com
// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing 
// second character of the final pair with an underscore ('_').

// Examples
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

const test = require('ava');

solution = (str) => {
  const pairs = [];
  str = str.length % 2 === 0 ? str : str + '_';
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }
  return pairs;
}

// If you want to run this test only, uncomment and comment the following lines respectively
// test.only('abc should return [ab, c_]', (t) => {
test('abc should return [ab, c_]', (t) => {
  t.deepEqual(solution('abc'), ['ab', 'c_']);
})

test('abcdef should return [ab, cd, ef]', (t) => {
  t.deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
})