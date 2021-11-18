'use strict';

const pipe = (...fns) => {
  if (fns.some(f => 'function' !== typeof(f))) {
    throw new Error('All arguments must be functions');
  }

  return x => fns.reduce((v, c) => c(v), x);
};

module.exports = { pipe };
