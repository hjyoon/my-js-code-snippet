const assert = require("node:assert/strict");

const add = (a, b) => {
  return a + b;
};

const append = (a, b) => {
  return [...a, ...b];
};

assert(add(1, 2) == 3);
assert.ok(add(1, 2) == 3);

assert.equal(add(1, 2), 3);
assert.notEqual(add(1, 2), 0);

assert.deepEqual(append([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
assert.notDeepEqual(append([1, 2], [3, 4, 5]), []);

assert.rejects(async () => {
  throw new Error();
});

assert.throws(
  () => {
    throw new TypeError("Wrong value");
  },
  {
    name: "TypeError",
    message: "Wrong value",
  }
);
