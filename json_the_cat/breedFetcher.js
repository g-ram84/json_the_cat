const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const address = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(address, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      return callback("Error", null);
    } else if (data.length === 0) {
      return callback("No breed found", null);
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };