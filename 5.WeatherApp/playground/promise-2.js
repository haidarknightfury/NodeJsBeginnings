const request = require('request');

var geoCodeAddress = (address) => {
    return new Promise(function (resolve, reject) {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBXMPJaJY9CQydF9NQn56gaToHPiB2eTys`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("unable to connect to google server");
            } else if (body.status === 'ZERO_RESULTS') {
                reject('unable to find the address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    longitude: body.results[0].geometry.location.lng,
                    latitude: body.results[0].geometry.location.lat
                });
            } 
        });
    });
};



geoCodeAddress('curepipe').then((result)=>{
    console.log(result);
},(error)=>{
    console.log(error);
});

geoCodeAddress('000000000').then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});