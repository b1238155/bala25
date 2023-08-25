const API = require('./API');

test("API code executed successfully", async () => {
  
  const data = await API;

  
  expect(data).toBeDefined();
});
