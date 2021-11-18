'use strict';

const compose = (...fns) => {
  const callbacks = [];

  const func = x => {
    let res = x;
    for (const f of fns.reverse()) {
      try {
        res = f(res);
      } catch (err) {
        callbacks.forEach(cb => cb());
        return;
      }
    }
    return res;
  };

  func.on = (str, fn) => ('error' === str) && callbacks.push(fn);

  return func;
};

module.exports = { compose };
