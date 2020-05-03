const {Schema, model} =require('mongoose')

const Orderschema = new Schema({
        dataOut: String,
        dataIn:String,
        Tov_name:String,
        CityIn:String,
        CityOut:String,
        Weight:Number,
        Cost:Number,
        Id_Number:Number
})

module.exports= model('Order',schema)