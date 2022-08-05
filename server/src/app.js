const express = require('express');
const path = require('path');


// express
const app = express();


/* INICIA EL SERVIDOR CON = NPM RUN START */
app.listen(3300,()=>{
    console.log('servidor a la espera de conexiones')
  })

    // ************ exports app - dont'touch ************
module.exports = app;