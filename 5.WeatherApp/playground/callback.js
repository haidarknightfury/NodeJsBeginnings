const request = require('request');

var getuser = (id,callback) =>{
    var user = {
        id:id,
        name:'Haidar'
    };
    setTimeout(() => callback(user), 3000);
};

getuser(1,(userObj)=>{
    console.log(userObj);
});

//http://maps.googleapis.com/maps/api/geocode/json?address=curepipe

