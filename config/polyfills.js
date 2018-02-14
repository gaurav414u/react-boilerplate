'use strict';

// using babel-polyfill
// injects Object.assign()
// also injects Promise, WeakMap, Array.from etc
require('babel-polyfill')

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}
