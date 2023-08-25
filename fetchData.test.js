 const fetchData = require('./fetchData'); 

 describe('fetchData', () => {
 test('fetches successfully Data from an API', async () => {
 const data = await fetchData('https://www.example.com');
 expect(data).toEqual('Data from example.com');
 });

 test('fetches erroneously Data from an API', async () => {
 await expect(fetchData('https://www.invalid-url.com')).rejects.toEqual('Failed to fetch the Data');
 });
 });
 

