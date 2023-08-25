const createArrayOfObjects = require('./Array');

test('creates the correct array of objects', () => {
  const expectedArray = [
    {
      name: "Bala",
      age: 24,
      profession: "Devops Engineer"
    },
    {
      name: "Mahendra Varma",
      age: 23,
      profession: "UI/UX Developer"
    },
    {
      name: "Jeya Prakash",
      age: 22,
      profession: "Designer"
    }
  ];

  const result = createArrayOfObjects();
  expect(result).toEqual(expectedArray);
});
