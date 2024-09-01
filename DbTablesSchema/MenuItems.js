const mongooes = require('mongoose');

const schema = mongooes.Schema;

const menuItemSchema = new schema({
    title:{type:String, require:true},
    url:{type:String, require:true},
    cName:{type:String, require:false},
    display:{type:String, require:false},
    user_displau:{type:String, require:true}
});

module.exports = mongooes.model('MenuItems',menuItemSchema);