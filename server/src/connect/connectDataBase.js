const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MegaTeleServices');

const objetodb = mongoose.connection

objetodb.on('connected',()=>{console.log("conexion correcta a mongoDB")});
objetodb.on("error",()=>{console.log('error en la conexion a mongoDB')});

module.exports = mongoose