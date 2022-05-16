const sum = require('../public/javascripts/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 4 to equal 5', () => {
  expect(sum(1, 4)).toBe(5);
});

test('adds 1 + 67 to equal 68', () => {
  expect(sum(1, 67)).toBe(68);
});