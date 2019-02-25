var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var itemSchema = new  Schema({
    name:{
        type : String

    },
    phonenumber:{
        type : String
    }
})

module.exports=mongoose.model('Item', itemSchema);