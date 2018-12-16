const request=require('request');

request({
  url: 'https://www.mapquestapi.com/geocoding/v1/address?key=7WlP7rkDEtOdAJLpslUcdBfS5TWNMux7&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  let addressObj = body.results[0].locations[0];
  let formattedAddress = addressObj.street + ', ' + addressObj.adminArea4 +', '+ addressObj.adminArea3 +', '+ addressObj.adminArea1;
  console.log(`Address: ${formattedAddress}`);
  console.log(`Latitude: ${addressObj.latLng.lat}`);
  console.log(`Longitude: ${addressObj.latLng.lng}`);
});
