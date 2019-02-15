
const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
  .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
      }
  })
  .help()
  .alias('help', 'h')
  .argv;

let inputEncoded = encodeURIComponent(argv.address);
let geoCodeURL = `https://www.mapquestapi.com/geocoding/v1/address?key=7WlP7rkDEtOdAJLpslUcdBfS5TWNMux7&location=${inputEncoded}`;

axios.get(geoCodeURL).then((response) => {
  if (response.statuscode === 400) {
    throw new Error('Unable to find that address.');
  }

  let lat = response.results[0].locations[0].latLng.lat;
  let lng = response.results[0].locations[0].latLng.lng;
  let weatherURL = `https://api.darksky.net/forecast/5c75df5f611173698c88e871db3f5404/${lat},${lng}`;
  console.log(response.data.results[0].formatted);
  return axios.get(weatherURL);
}).then((response) => {
  let temperature = response.data.currently.temperature;
  let apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`The weather is currently ${temperature}. It currently feels like ${apparentTemperature}`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  } else {
    console.log(e.message);
  }
});
//https://geocoder.api.here.com/6.2/geocode.json?searchtext=200%20S%20Mathilda%20Sunnyvale%20CA&app_id=V5SR1oSdt0K9lud4x4Bp&app_code=JrPdV9JJXsDF5xVM_3WvLw&gen=9
//const request = require('request')
// ;
// request({
//   url:'https://geocoder.api.here.com/6.2/geocode.json?searchtext=200%20S%20Mathilda%20Sunnyvale%20CA&app_id=V5SR1oSdt0K9lud4x4Bp&app_code=JrPdV9JJXsDF5xVM_3WvLw&gen=9', json: true
// }, (error, response, body) => {
//   console.log(body.Response.View[0].Result[0].Location.Address);
// });
