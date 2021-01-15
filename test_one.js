const async = require('async');

function test1(a, b) {
  return a + b;
};

function test2(a, b) {
  return a - b;
};

function test3(a, b) {
  return a * b;
};

function test4(a, b) {
  return a / b;
};

async.series([
  async() => test1(5, 2), 
  async() => test2(5, 2), 
  async() => test3(5, 2), 
  async() => test4(5, 2)
], (err, result) => {
  if (err) {
    console.error("There was a error", err);
  }

  console.log('success', result);
})