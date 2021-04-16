class Thing {
  static define(propName, propValue) {
    this[propName] = propValue
  }
}

const oldThing = new Thing()
Thing.define('abra', 'cadabra')
const newTing = new Thing()

console.log(
  'Class key values:', Object.entries(Thing),
  '\ninstance key values before the `define`:', Object.entries(oldThing),
  '\ninstance key values after the `define`:', Object.entries(newTing)
);
