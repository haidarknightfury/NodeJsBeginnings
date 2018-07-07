const {SHA256} = require('crypto-js');
const JWT = require('jsonwebtoken');


var message = 'i am user 1';
var hash = SHA256(message).toString();

console.log(`message ${message}`);
console.log(`hash ${hash}`);

var data= {
    id:4
}
var token = {
    data,
    hash:SHA256(JSON.stringify(data)+ 'somesecret').toString()
}

// HOW MAN IN THE MIDDLE OPERATES OPERATE
//token.data = 5;
//token.hash = SHA256(JSON.stringify(data)).toString();
//somesecret is the salt value

var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();
if(token.hash === resultHash){
    console.log('data was not changed');
}
else{
    console.log('data was changed');
}

//JWT.sign
//JWT.verify

// takes the salt value
var token = JWT.sign(data,'123abc');
// jwt.io -> paste the secret to verify
console.log('token',token);

// error if not same salt/secret
var decoded = JWT.verify(token,'123abc');
console.log('decoded',decoded);