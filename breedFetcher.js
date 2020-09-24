const request = require('request');

const fileUrl = process.argv.slice(2);
const address = "https://api.thecatapi.com/v1/breeds/search?q=" + fileUrl[0];


request(address, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('ERROR');
  } else if (data.length === 0) {
    console.log("No breed found");
  } else {
  // console.log(data);
    console.log(data[0].description);
  }
});
