//forecast.io key:
//5c75df5f611173698c88e871db3f5404
//https://api.darksky.net/forecast/KEY/lat,long
const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/5c75df5f611173698c88e871db3f5404/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode ===200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
