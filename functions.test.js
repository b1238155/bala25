const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Bala Mani object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Bala', lastName: 'Mani' });
});

test('Should be under 2000', () => {
  const load1 = 1000;
  const load2 = 500;
  expect(load1 + load2).toBeLessThan(2000);
});
