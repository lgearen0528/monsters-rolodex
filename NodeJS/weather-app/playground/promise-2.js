const request = require('request');
let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let inputEncoded = encodeURIComponent(address);
    request({
      url: `https://www.mapquestapi.com/geocoding/v1/address?key=7WlP7rkDEtOdAJLpslUcdBfS5TWNMux7&location=${inputEncoded}`,
      json: true
    }, (error, response, body) => {
      if(error){
        reject('Unable to connect to MapQuest API.');
      }else if (body.statuscode === 400) {
        reject('Unable to find that address');
      }else {
        let addressJSON = body.results[0].locations[0];
        let formatted = addressJSON.street +' '
        + addressJSON.adminArea5 + ' '
        + addressJSON.adminArea3+ ' '
        + addressJSON.adminArea1;
        resolve({
          address: formatted,
          latitude: addressJSON.latLng.lat,
          longitude: addressJSON.latLng.lng
        });
      }
    });
  });
};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
