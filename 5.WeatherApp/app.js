const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const axios = require('axios');


//axios

const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch the weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


var encodedAddress = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBXMPJaJY9CQydF9NQn56gaToHPiB2eTys`;
axios.get(geoCodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng;
    debugger;
    var weatherURL = `https://api.darksky.net/forecast/3599e33536f00c5033bb9f3a15463c67/${lat},${long}`;
    return axios.get(weatherURL);

}).then((response)=>{
    console.log(response.data.currently.temperature);
})
.catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('not found');
    } else {
        console.log(e.message);
    }
});