const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBXMPJaJY9CQydF9NQn56gaToHPiB2eTys`,
        json: true
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        if (error) {
            callback("unable to connect to google server");
        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find the address');
        } else if (body.status === 'OK') {
            callback(undefined,{
                address: body.results[0].formatted_address,
                longitude: body.results[0].geometry.location.lng,
                latitude: body.results[0].geometry.location.lat
            });
        } else {
            console.log(response);
        }
    });

};



module.exports = {
    geocodeAddress
}