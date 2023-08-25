const API = fetch("https://dummy.restapiexample.com/api/v1/employees")
  .then(response => response.json())
  .then(data => {
    console.log("Employee Data:", data);
    return data;
  })
  .catch(error => {
    console.log("Fetch Error:", error);
    throw error;
  });

module.exports = API;
