const reversedString = require('./reversedstring');

test('reverses and converts to lowercase', () => {
  expect(reversedString('Hello')).toBe('olleh');
  expect(reversedString('JavaScript')).toBe('tpircsavaj');
  expect(reversedString('Testing123')).toBe('321gnitset');
});

