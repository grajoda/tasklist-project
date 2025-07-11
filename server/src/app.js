require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const ipConfig = require('./config/ipAndPortConfig.js')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

const corsConfig = require('./config/corsConfig.js')
app.use(cors(corsConfig));

const Routes = require('./routes/routes.js');
app.use('/', Routes);


const PORT = ipConfig.defaultPort;

app.listen(PORT);
console.log('server online on port '+ PORT);