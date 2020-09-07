// From codewars.com
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const test = require('ava');

const binaryArrayToNumber = (arr) => {
  const arrayLength = arr.length;
  let number = 0;
  for (let i = arrayLength - 1; i >= 0; i--) {
    number += arr[i] === 0 ? 0 : Math.pow(2, arrayLength - i - 1);
  }
  return number
}

function macro(t, input, expected) {
  t.is(binaryArrayToNumber(input), expected)
}

test('Testing: [0, 0, 0, 1] ==> 1', macro, [0, 0, 0, 1], 1);
test('Testing: [0, 0, 1, 0] ==> 2', macro, [0, 0, 1, 0], 2);
test('Testing: [0, 1, 0, 1] ==> 5', macro, [0, 1, 0, 1], 5);
test('Testing: [1, 0, 0, 1] ==> 9', macro, [1, 0, 0, 1], 9);
test('Testing: [0, 1, 1, 0] ==> 6', macro, [0, 1, 1, 0], 6);
test('Testing: [1, 1, 1, 1] ==> 15', macro, [1, 1, 1, 1], 15);
test('Testing: [1, 0, 1, 1] ==> 11', macro, [1, 0, 1, 1], 11);
