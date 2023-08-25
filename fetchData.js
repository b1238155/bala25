function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://www.example.com") {
        resolve("Data from example.com");
      } else {
        reject("Failed to fetch the Data");
      }
    }, 1000);
  });
}

module.exports = fetchData;

