// From codewars.com
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// NOTE:
// Function XO has been modified to take the chars required to be found as args to demostrate how
// beforeEach works

const test = require('ava');

const XO = (str, charOne, charTwo) => {
  const xCounter = str.toLowerCase().split('').filter( char => char === charOne)
  const oCounter = str.toLowerCase().split('').filter( char => char === charTwo)
  return xCounter.length === oCounter.length
}

// set x and o as the chars to be found so you should not specify them on each test
test.beforeEach(t => {
  t.context = {
    charOne: 'x',
    charTwo: 'o'
  };
});

test('xo is true', t => {
  t.is(XO('xo', t.context.charOne, t.context.charTwo), true);
});

test('xxOo is true', t => {
  t.is(XO('xxOo', t.context.charOne, t.context.charTwo), true);
});

test('xxxm is false', t => {
  t.is(XO('xxxm', t.context.charOne, t.context.charTwo), false);
});

test('Oo is true', t => {
  t.is(XO('Oo', t.context.charOne, t.context.charTwo), false);
});

test('ooom is false', t => {
  t.is(XO('ooom', t.context.charOne, t.context.charTwo), false);
});