const mongooes = require("mongoose");

const uniquevalidator = require("mongoose-unique-validator");

const schema = mongooes.Schema;

const userSchema = new schema({
    name:{type:String, require:true},
    mailid:{type:String, require:true, unique: true},
    password:{type:String, require:true, minlength:6},
    image:{type:String, require:false},

});

userSchema.plugin(uniquevalidator);
module.exports = mongooes.model('User',userSchema);