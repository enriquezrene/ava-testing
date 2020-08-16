// From codewars.com
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
const test = require('ava');

const vowels = ['a', 'e', 'i', 'o', 'u']

function getCount(str) {
  let vowelsCount = 0;
  str.split('').forEach(char => {
    if(vowels.findIndex(vowel => vowel === char) >= 0){
      vowelsCount ++;
    }
  })
  return vowelsCount;
}

test('foo', t => {
  t.is(getCount("abracadabra"), 5);
});