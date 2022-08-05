const mongoose = require('mongoose');

const buildingsSchema = mongoose.Schema({
    name:String,
    address:String,
    city:String,
    state:String,
    postal:Number,
    plans:Array

})

/* const buildingsSchema = mongoose.Schema({
    _id:{
        type: String,
        requiered: true,
        description:{
            type:String,
            required:true
        }
    },

    address:{
        type: String,
        requiered: true,
    },

    city:{
        type: String,
        requiered: true,
    }, 

    state:{
        type: String,
        requiered: true,
    },

    postal:{
        type: String,
        requiered: true,
    },

    plans:{
        type: String,
        requiered: true,
    },
}) */

const buildings = mongoose.model('buildings', buildingsSchema)

module.exports = buildings