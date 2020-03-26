const express = require('express');
const routes  = require('./routes');
const cors = require('cors');

const app = express();

//restrict applications that may use backend
app.use(cors());

//use JSON format in request/response
app.use(express.json());

//import routes
app.use(routes);

app.listen(3333,()=>{
    console.log('debug > console listening on port 3333');
});