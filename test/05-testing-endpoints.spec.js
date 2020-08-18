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

const likesAndExpectedMessages = [
  { likes: [], message: 'no one likes this' },
  { likes: ["Peter"], message: 'Peter likes this' },
  { likes: ["Jacob", "Alex"], message: 'Jacob and Alex like this' },
  { likes: ["Max", "John", "Mark"], message: 'Max, John and Mark like this' },
  { likes: ["Alex", "Jacob", "Mark", "Max"], message: 'Alex, Jacob and 2 others like this' }
]

function likes(names) {
  let message = names[0] ? names[0] : 'no one'
  if (names.length === 2) {
    message = names[0] + ' and ' + names[1]
  } else if (names.length > 2) {
    names[2] = names.length > 3 ? (names.length - 2) + ' others' : names[2]
    message = `${names[0]}, ${names[1]} and ${names[2]}`
  }
  return message += names.length > 1 ? ' like this' : ' likes this'
}

function setup() {
  const app = express();
  app.get('/testing-endpoints', (req, res) => {
    const index = req.query.id;
    res.send({ likes: likes(likesAndExpectedMessages[index].likes) })
  })
  return app;
}

likesAndExpectedMessages.forEach( (likesAndMessage, index) => {
   test(likesAndMessage.message, async t => {
    let response = await request(setup()).get(`/testing-endpoints?id=${index}`).send();
    t.deepEqual(response.body.likes, likesAndMessage.message);   
   }) 
})