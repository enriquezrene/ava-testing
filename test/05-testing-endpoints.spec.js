// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, 
// containing the names of people who like an item. 
// It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

const test = require('ava');
const request = require('supertest');
const express = require('express');

const likesArray = [
  [],
  ["Peter"],
  ["Jacob", "Alex"],
  ["Max", "John", "Mark"],
  ["Alex", "Jacob", "Mark", "Max"]
]

function likes(names) {
  let message = names[0] ? names[0] : 'no one'
  if (names.length === 2) {
    message = names[0] + ' and ' + names[1]
  } else if (names.length === 3) {
    message = names[0] + ', ' + names[1] + ' and ' + names[2]
  } else if (names.length > 3) {
    message = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others'
  }
  return message += names.length > 1 ? ' like this' : ' likes this'
}

function setup() {
  const app = express();
  app.get('/testing-endpoints', (req, res) => {
    const index = req.query.id;
    res.send({ likes: likes(likesArray[index]) })
  })
  return app;
}

test('If nobody likes, no one likes this', async t => {
  let response = await request(setup())
    .get("/testing-endpoints?id=0")
    .send();
  t.deepEqual(response.body.likes, 'no one likes this');
});

test('["Peter"] => must be "Peter likes this"', async t => {
  let response = await request(setup())
    .get("/testing-endpoints?id=1")
    .send();
  t.deepEqual(response.body.likes, 'Peter likes this');
});

test('["Jacob", "Alex"] => must be "Jacob and Alex like this"', async t => {
  let response = await request(setup())
    .get("/testing-endpoints?id=2")
    .send();
  t.deepEqual(response.body.likes, 'Jacob and Alex like this');
});

test('["Max", "John", "Mark"] => must be "Max, John and Mark like this"', async t => {
  let response = await request(setup())
    .get("/testing-endpoints?id=3")
    .send();
  t.deepEqual(response.body.likes, 'Max, John and Mark like this');
});

test('["Alex", "Jacob", "Mark", "Max"] => must be "Alex, Jacob and 2 others like this"', async t => {
  let response = await request(setup())
    .get("/testing-endpoints?id=4")
    .send();
  t.deepEqual(response.body.likes, 'Alex, Jacob and 2 others like this');
});