const async = require('async');

async.series([
  function (callback) {
    callback(null, 'one');
  },
  function (callback) {
    callback(null, 'two');
  }
],
  function (err, results) {
    console.log('-- success --', results);
  });