const mongooes = require("mongoose");

const schema = mongooes.Schema;

const userSchema = new schema({
    name:{type:String, require:true},
    emailid:{type:String, require:true},
    mobile:{type:String, require:true},
    password:{type:String, require:true},
});

module.exports = mongooes.model('User',userSchema);