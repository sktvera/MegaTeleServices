const express = require('express');
const path = require('path');

//mongoDB import
const connectDataBase = require('./connect/connectDataBase.js');

// express
const app = express();

//router
const indexRoutes = require('./indexRoutes/builldingsRouter');

/* INICIA EL SERVIDOR CON = NPM RUN START */
app.listen(3300,()=>{
  console.log('servidor a la espera de conexiones')
})

  //Ruta global http://localhost/home
//usar localhost:3300/
app.use('/',indexRoutes);



  // ************ exports app - dont'touch ************
module.exports = app;