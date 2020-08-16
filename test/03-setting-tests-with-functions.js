// From codewars.com
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const test = require('ava');

const testCases = [
  { case: 'Testing: [0, 0, 0, 1] ==> 1', binary: [0, 0, 0, 1], expectedNumber: 1 },
  { case: 'Testing: [0, 0, 1, 0] ==> 2', binary: [0, 0, 1, 0], expectedNumber: 2 },
  { case: 'Testing: [0, 1, 0, 1] ==> 5', binary: [0, 1, 0, 1], expectedNumber: 5 },
  { case: 'Testing: [1, 0, 0, 1] ==> 9', binary: [1, 0, 0, 1], expectedNumber: 9 },
  { case: 'Testing: [0, 1, 1, 0] ==> 6', binary: [0, 1, 1, 0], expectedNumber: 6 },
  { case: 'Testing: [1, 1, 1, 1] ==> 15', binary: [1, 1, 1, 1], expectedNumber: 15 },
  { case: 'Testing: [1, 0, 1, 1] ==> 11', binary: [1, 0, 1, 1], expectedNumber: 11 }
]

function buildTest(testCase, t){
  t.is(binaryArrayToNumber(testCase.binary), testCase.expectedNumber);
}

const binaryArrayToNumber = (arr) => {
  const arrayLength = arr.length;
  let number = 0;
  for (let i = arrayLength - 1; i >= 0; i--) {
    number += arr[i] === 0 ? 0 : Math.pow(2, arrayLength - i - 1);
  }
  return number
};

testCases.forEach( testCase => {
  test(testCase.case, t => {
    buildTest(testCase, t);
  });
});