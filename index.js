const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest',{ useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

require('./controller/AuthController')(app);

app.get('/',(request,response)=>{
    return response.json({message:'server is up'})
})


app.get('/atualizou',(request,response)=>{
    return response.json({message:'atualizou mesmo'})
})

app.post('/atualizou',(request,response)=>{
    return response.json({message:'atualizou mesmo'})
})

app.listen(3333);