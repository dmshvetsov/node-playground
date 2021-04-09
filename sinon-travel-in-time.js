const sinon = require('sinon')

const MILLISECODS = 1000;

let clock = sinon.useFakeTimers(new Date('1985-03-07T00:00:01'))
console.log(new Date().toISOString());

clock.tick(69 * MILLISECODS);
console.log(new Date().toISOString());

// Do not override clock or you need to restore both at the end
sinon.useFakeTimers(new Date('2021-04-09T10:45:01'))
console.log(new Date().toISOString());

clock.restore();
console.log(new Date().toISOString());
