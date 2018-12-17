const request=require('request');

let geocodeAddress = (address, callback) => {
  let inputEncoded = encodeURIComponent(address);
  request({
    url: `https://www.mapquestapi.com/geocoding/v1/address?key=7WlP7rkDEtOdAJLpslUcdBfS5TWNMux7&location=${inputEncoded}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to MapQuest API.');
    }else if (body.statuscode === 400) {
      callback('Unable to find that address');
    }else {
      let addressJSON = body.results[0].locations[0];
      let formatted = addressJSON.street + '\n'
      + addressJSON.adminArea5 +'\n'
      + addressJSON.adminArea3 +'\n'
      + addressJSON.adminArea1;
      callback(undefined, {
        addressObj :  addressJSON,
        address: formatted,
        latitude: addressJSONbody.latLng.lat,
        longitude: addressJSON.latLng.lng
      });
    }
  });
};


module.exports = {
  geocodeAddress
};
//https://geocoder.api.here.com/6.2/geocode.json?searchtext=200%20S%20Mathilda%20Sunnyvale%20CA&app_id=V5SR1oSdt0K9lud4x4Bp&app_code=JrPdV9JJXsDF5xVM_3WvLw&gen=9
//const request = require('request');
// request({
//   url:'https://geocoder.api.here.com/6.2/geocode.json?searchtext=200%20S%20Mathilda%20Sunnyvale%20CA&app_id=V5SR1oSdt0K9lud4x4Bp&app_code=JrPdV9JJXsDF5xVM_3WvLw&gen=9', json: true
// }, (error, response, body) => {
//   console.log(body.Response.View[0].Result[0].Location.Address);
// });
