const {Mongoose} = require('../db/mongoose');
const Validator = require('validator');

var User = Mongoose.model('user', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique:true,
        validate:{
            //validator:Validator.isEmail
            validator:(value)=>{
                return Validator.isEmail(value);
            },
            message:'{VALUE} is not a valid email'
        },
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        }
    }]
});

module.exports = {
    User
}