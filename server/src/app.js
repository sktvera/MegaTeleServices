const express = require('express');
const morgan = require('morgan');
const path = require('path')
//const cors = require('cors')

const app = express();

// allow cross-origin requests
//app.use(cors())

//settings
app.set('port', 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());



const indexRouter = require('./routes/index.js')

app.use('/', indexRouter)

//starting the server
app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo'))