const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'address to fetch the weather',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

// encodeURIComponent - encode url
// decodeURIComponent - decode the encoded url

var geocodeCallback = (errorMessage, result) =>{
      if (errorMessage) {
          console.log(errorMessage);
      } else {
          console.log(JSON.stringify(result, undefined, 2));
          weather.getWeather(result.latitude, result.longitude, weatherCallback);
      }
}

var weatherCallback = (errorMessage,result) =>{
       if (errorMessage) {
           console.log(errorMessage);
       } else {
           console.log(JSON.stringify(result, undefined, 2));
       }
}

geocode.geocodeAddress(argv.address, geocodeCallback);
