// From codewars.com
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
const test = require('ava');

const vowels = 'aeiou';

function getCount(str) {
  return str.toLowerCase().split('') .filter(char => vowels.includes(char)).length
}

test('word has 5 vowels', t => {
  t.is(getCount("abracadabra"), 5);
});

test('getCount is case insensitive', t => {
  t.is(getCount("abrAcadAbra"), 5);
});