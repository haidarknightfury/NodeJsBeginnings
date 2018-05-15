const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request(`https://api.darksky.net/forecast/3599e33536f00c5033bb9f3a15463c67/${latitude},${longitude}`, {
        json: true,
        method: 'GET'
    }, (error, response, body) => {
        debugger;
        if (error) {
            callback('error while fetching weather');
        } else if (response.statusCode == 400 || response.statusCode == 404) {
            callback('the url is not good');
        } else if (response.statusCode == 200 && body) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        // console.log(JSON.stringify(body.currently.temperature, undefined, 2));
    });
}

module.exports = {
    getWeather
}