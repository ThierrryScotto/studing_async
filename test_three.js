const async = require('async');

const soma      = require('./apply_soma');
const sub       = require('./apply_sub');
const { calculate } = require('./apply_calculate');

async.series([
  async.apply(calculate, soma),
  async.apply(calculate, sub)
], (err, result) => {
  console.log('Success', result);
})