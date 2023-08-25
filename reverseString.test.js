const reverseString = require('./reverseString');

test('Reverses a non-empty string', () => {
  expect(reverseString('Hello')).toBe('olleh');
});

test('Reverses an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('Reverses a lowercase string', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

